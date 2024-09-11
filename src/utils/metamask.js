import {ethers, parseEther, formatEther} from "ethers";

export async function requestSelectedAccount() {
    if (window?.ethereum && window?.ethereum?.isMetaMask) {
        try {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            let defaultWallet = accounts[0];
            return defaultWallet
        } catch (error) {
            throw Error(error.message)
        }

    } else {
        //
        console.log('No metamask is installed')
    }
}

export async function getAccountBalance(account) {
    try {
        const balance = await window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']});
        return formatEther(balance);
    } catch (error) {
        throw Error(error.message)
    }
};

export function getNewAccountOnAccountChange(newAccount) {
    let account = newAccount;
    if (Array.isArray(newAccount)) {
        account = newAccount[0]
    }

    if (typeof account === 'string') {
        return account.toString()
    } else {
        console.log('accountChangedHandler error');
    }
}

export async function payWithMetamask(provider, signer, destinationWalletAddress, value) {
    try {

        if (!window?.ethereum && !window?.ethereum?.isMetaMask) {
            console.log("MetaMask not installed; using read-only defaults")
        } else {
            provider = new ethers.BrowserProvider(window.ethereum)
            signer = await provider.getSigner();
        }

        const tx = await signer.sendTransaction({
            to: destinationWalletAddress,
            value: parseEther(value)
        });

        return tx;

    } catch (error) {
        throw Error(error.message)
    }
};

export function isEthereumToken(token) {
    const ethereumTokens = ["ETH", "USDT", "USDC"];
    return ethereumTokens.includes(token);
}


export function isQREnabled(token) {
    const ethereumTokens = ["BTC", "ETH", "XRP", "LTC", "DAO"];
    return ethereumTokens.includes(token);
}

export function reloadPageOnChange() {
    window.location.reload();
}

export default {
    requestSelectedAccount,
    getAccountBalance,
    getNewAccountOnAccountChange,
    payWithMetamask,
    isEthereumToken,
    reloadPageOnChange
}