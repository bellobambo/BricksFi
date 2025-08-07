import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface BricksFi {
  'createProperty' : ActorMethod<
    [
      string,
      bigint,
      string,
      bigint,
      bigint,
      bigint,
      bigint,
      bigint,
      number,
      number,
    ],
    bigint
  >,
  'getAllProperties' : ActorMethod<[], Array<Property>>,
}
export interface Property {
  'id' : bigint,
  'creator' : Principal,
  'investors' : bigint,
  'bedrooms' : bigint,
  'name' : string,
  'squarefoot' : bigint,
  'image' : string,
  'monthlyYield' : bigint,
  'bathrooms' : bigint,
  'price' : bigint,
  'fundingPercent' : number,
  'icpToUsd' : number,
}
export interface _SERVICE extends BricksFi {}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
