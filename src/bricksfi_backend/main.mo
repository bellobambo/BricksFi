actor {
  public query func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  };
};

// dfx canister create bricksfi_backend
// bricksfi_backend canister created with canister id: ulvla-h7777-77774-qaacq-cai
// dfx canister create bricksfi_frontend
// bricksfi_frontend canister created with canister id: ucwa4-rx777-77774-qaada-cai
// "prebuild": "dfx generate",
