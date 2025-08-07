export const idlFactory = ({ IDL }) => {
  const Property = IDL.Record({
    'id' : IDL.Nat,
    'creator' : IDL.Principal,
    'investors' : IDL.Nat,
    'bedrooms' : IDL.Nat,
    'name' : IDL.Text,
    'squarefoot' : IDL.Nat,
    'image' : IDL.Text,
    'monthlyYield' : IDL.Nat,
    'bathrooms' : IDL.Nat,
    'price' : IDL.Nat,
    'fundingPercent' : IDL.Float64,
    'icpToUsd' : IDL.Float64,
  });
  const BricksFi = IDL.Service({
    'createProperty' : IDL.Func(
        [
          IDL.Text,
          IDL.Nat,
          IDL.Text,
          IDL.Nat,
          IDL.Nat,
          IDL.Nat,
          IDL.Nat,
          IDL.Nat,
          IDL.Float64,
          IDL.Float64,
        ],
        [IDL.Nat],
        [],
      ),
    'getAllProperties' : IDL.Func([], [IDL.Vec(Property)], ['query']),
  });
  return BricksFi;
};
export const init = ({ IDL }) => { return []; };
