import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthClient } from "@dfinity/auth-client";
import { Principal } from "@dfinity/principal";
import { HttpAgent, Actor } from "@dfinity/agent";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Home from "../component/pages/Home";
import Marketplace from "../component/pages/Marketplace";
import WaitList from "../component/pages/WaitList";
import NotFound from "../component/pages/NotFound";
import CreateProperty from "../component/CreateProperty";
import PropertyList from "../component/PropertyList";
import { idlFactory } from "../../declarations/bricksfi_backend";

export default function App() {
  const [authClient, setAuthClient] = useState(null);
  const [principal, setPrincipal] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [actor, setActor] = useState(null);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);

  // Initialize auth client with idle management
  useEffect(() => {
    async function initAuth() {
      try {
        const client = await AuthClient.create({
          idleOptions: {
            idleTimeout: 30 * 60 * 1000, // 30 minutes
            disableDefaultIdleCallback: true, // We'll handle it ourselves
          },
          // Optional: Use Ed25519 keys if you prefer
          // keyType: 'Ed25519',
        });
        setAuthClient(client);

        const isAuthenticated = await client.isAuthenticated();
        setIsAuthenticated(isAuthenticated);

        if (isAuthenticated) {
          await handleAuthenticated(client);
        }

        // Register custom idle callback
        client.idleManager?.registerCallback?.(() => {
          handleLogout();
          window.location.reload();
        });
      } catch (error) {
        console.error("Failed to initialize auth client:", error);
      }
    }

    initAuth();
  }, []);

  const handleAuthenticated = async (client) => {
    const identity = await client.getIdentity();
    const principal = identity.getPrincipal();
    setPrincipal(principal);
    setIsAuthenticated(true);
    initActor(identity);
  };

  const initActor = (identity) => {
    const agent = new HttpAgent({
      identity,
      host: "https://icp0.io", // Mainnet gateway
    });

    // For local development, you might want to fetch the root key
    if (process.env.NODE_ENV !== "production") {
      agent.fetchRootKey().catch((err) => {
        console.warn(
          "Unable to fetch root key. Check to ensure that your local replica is running"
        );
        console.error(err);
      });
    }

    const actor = Actor.createActor(idlFactory, {
      agent,
      canisterId: process.env.CANISTER_ID_BRICKSFI_BACKEND,
    });

    setActor(actor);
    fetchProperties(actor);
  };

  const fetchProperties = async (actor) => {
    setLoading(true);
    try {
      const props = await actor.getAllProperties();
      setProperties(props);
    } catch (error) {
      console.error("Failed to fetch properties:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    if (!authClient) return;

    try {
      await authClient.login({
        identityProvider: "https://identity.ic0.app", // Mainnet identity
        // 7 days in nanoseconds
        maxTimeToLive: BigInt(7 * 24 * 60 * 60 * 1000 * 1000 * 1000),
        onSuccess: async () => {
          await handleAuthenticated(authClient);
        },
        onError: (error) => {
          console.error("Login failed:", error);
        },
      });
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleLogout = async () => {
    if (!authClient) return;

    try {
      await authClient.logout();
      setIsAuthenticated(false);
      setPrincipal(null);
      setActor(null);
      setProperties([]);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const handlePropertyCreated = () => {
    fetchProperties(actor);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        isAuthenticated={isAuthenticated}
        principal={principal}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/marketplace"
            element={
              <>
                {isAuthenticated && (
                  <CreateProperty
                    actor={actor}
                    principal={principal}
                    onPropertyCreated={handlePropertyCreated}
                  />
                )}
                <PropertyList
                  properties={properties}
                  loading={loading}
                  currentUser={principal}
                />
              </>
            }
          />
          <Route path="/waitlist" element={<WaitList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
