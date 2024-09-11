import BTC from "../assets/bitcoin.svg";
import ETH from "../assets/ethereum.svg";
import USDT from "../assets/tether.svg";
import XRP from "../assets/ripple_xrp.svg";
import LTC from "../assets/litecoin.svg";
import DAO from "../assets/dash.svg";

const cryptos = {
    'BTC' :{
        icon : BTC,
        code: 'BTC',
        text : 'Bitcoin'
    },
    'ETH' :{
        icon : ETH,
        code: 'ETH',
        text : 'Ethereum'
    },
    'USDT' :{
        icon : USDT,
        code: 'USDT',
        text : 'Tether'
    },
    'XRP' :{
        icon : XRP,
        code: 'XRP',
        text : 'Ripple'
    },
    'LTC' :{
        icon : LTC,
        code: 'LTC',
        text : 'Litecoin'
    },
    'DAO' :{
        icon : DAO,
        code: 'DAO',
        text : 'Dash'
    }
}

const getCrypto = (code) => {
   return cryptos[code]
};

export default getCrypto;