import axios from "axios";
import {useEffect, useState} from "react";
import { Address } from '@multiversx/sdk-core/out';
import {
    useGetIsLoggedIn,
    useGetNetworkConfig, useGetSignedTransactions,
    // useGetSuccessfulTransactions
} from "@multiversx/sdk-dapp/hooks";

export const useGetDeployedContractAddress = (sessionId: string) => {
    const [contractOrDeployerAddress, setContractOrDeployerAddress] = useState('');

    const isLoggedIn = useGetIsLoggedIn();
    const {network} = useGetNetworkConfig();
    // const completedTransactions = useGetSuccessfulTransactions();
    const { signedTransactions } = useGetSignedTransactions();

    const getContractAddress = async (address: string): Promise<string> => {
        try {
            const { data } = await axios.get(`${network.apiAddress}/transactions/${address}`);
            const rawTopic = data?.logs?.events[0]?.topics[0];
            const rawAddress = Buffer.from(rawTopic, 'base64').toString('hex');
            return Address.fromHex(rawAddress).bech32();
        } catch(err) {
            console.error(err);
            return '-';
        }
    };

    const fetchContractAddressAfterDeploy = async (sessionId: string) => {
        const _hash = signedTransactions[sessionId]?.transactions[0]?.hash as string | undefined;
        if (_hash) {
            const foundContractAddress = await getContractAddress(_hash);
            if (foundContractAddress && foundContractAddress !== contractOrDeployerAddress) {
                setContractOrDeployerAddress(foundContractAddress);
            }
        }
    };


    useEffect(() => {
        if(!sessionId || !isLoggedIn) {
            return;
        }

        fetchContractAddressAfterDeploy(sessionId);
    }, [sessionId, isLoggedIn, signedTransactions[sessionId]?.status]);
    // }, [sessionId, isLoggedIn, completedTransactions.successfulTransactions[sessionId]?.status]);

    return {
        contractOrDeployerAddress
    }
}