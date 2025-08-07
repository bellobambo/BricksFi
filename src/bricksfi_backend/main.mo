import Nat "mo:base/Nat";
import Text "mo:base/Text";
import Principal "mo:base/Principal";
import Array "mo:base/Array";

persistent actor class BricksFi() = this {

  // Property type definition
  public type Property = {
    id : Nat;
    creator : Principal;
    name : Text;
    price : Nat;
    image : Text;
    bedrooms : Nat;
    bathrooms : Nat;
    squarefoot : Nat;
    investors : Nat;
    monthlyYield : Nat;
    icpToUsd : Float;
    fundingPercent : Float;
  };

  // Stable storage for properties and counter
  var properties : [Property] = [];
  var propertyIdCounter : Nat = 0;

  // Function to create a new property
  public func createProperty(
    name : Text,
    price : Nat,
    image : Text,
    bedrooms : Nat,
    bathrooms : Nat,
    squarefoot : Nat,
    investors : Nat,
    monthlyYield : Nat,
    icpToUsd : Float,
    fundingPercent : Float,
  ) : async Nat {
    let newProperty : Property = {
      id = propertyIdCounter;
      creator = Principal.fromActor(this); // You may want Principal.fromCaller() if using identity
      name;
      price;
      image;
      bedrooms;
      bathrooms;
      squarefoot;
      investors;
      monthlyYield;
      icpToUsd;
      fundingPercent;
    };

    // Append new property to the stable array
    properties := Array.append<Property>(properties, [newProperty]);

    propertyIdCounter += 1;
    return newProperty.id;
  };

  // Public query function to return all properties
  public query func getAllProperties() : async [Property] {
    return properties;
  };
};
