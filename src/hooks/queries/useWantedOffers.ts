import {useCallback, useState} from "react";
import {ProxyNetworkProvider} from "@multiversx/sdk-network-providers/out";
import {ResultsParser} from "@multiversx/sdk-core/out";
import {smartContract} from "utils/smartContract.ts";
import {API_URL} from "config";

export type WantedOfferType = {
    offerId: number;
}

export const useWantedOffers = () => {
    const [wantedOffers, setWantedOffers] = useState<WantedOfferType[]>([]);

    const getWantedOffers = useCallback(async (address: string) => {
        const networkProvider = new ProxyNetworkProvider(API_URL);
        const interaction = smartContract.methods.getWantedOffers([address]);
        const query = interaction.buildQuery();

        const response = await networkProvider.queryContract(query);

        const typedBundle = new ResultsParser().parseQueryResponse(response, interaction.getEndpoint());

        console.log(typedBundle.values);
        setWantedOffers(typedBundle.values.map((offerId: any) => ({offerId})));

        return typedBundle.values;
    }, []);

   return {
       wantedOffers,
       getWantedOffers
   }
}