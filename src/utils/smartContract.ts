import { contractAddress } from 'config';
import json from 'abis/nft-escrow.abi.json';
import {AbiRegistry, SmartContract, Address} from "@multiversx/sdk-core";

const abi = AbiRegistry.create(json);

export const smartContract = new SmartContract({
  address: new Address(contractAddress),
  abi
});
