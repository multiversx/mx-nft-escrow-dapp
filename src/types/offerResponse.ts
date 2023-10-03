import BigNumber from "bignumber.js";
import {Address} from "@multiversx/sdk-core";

export type OfferResponseType = {
    creator: Address;
    nft: string;
    nonce: BigNumber;
    wanted_address: Address;
    wanted_nft: string;
    wanted_nonce: BigNumber;
}