import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Home from "../component/pages/Home";
import Marketplace from "../component/pages/Marketplace";
import WaitList from "../component/pages/WaitList";
import NotFound from "../component/pages/NotFound";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/waitlist" element={<WaitList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
