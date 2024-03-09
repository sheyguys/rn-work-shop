import type {Action} from 'redux';

const coinActions = {
  fetchCoinList: () => ({type: 'FETCH_COIN_LIST'}),
};

export type CoinAction = typeof coinActions & Action;

export default coinActions;
