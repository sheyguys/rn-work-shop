import type {CoinData} from '../../services/coingecko';
import type {CoinAction} from './actions';

export interface CoinState {
  listCoin: CoinData[];
}

const initialState: CoinState = {
  listCoin: [],
};

export const coinReducer = (
  state = initialState,
  action: CoinAction & {payload: CoinData[]},
): CoinState => {
  switch (action.type) {
    case 'SET_COIN_LIST_SUCCESS':
      return {
        ...state,
        listCoin: action.payload,
      };
    default:
      return state;
  }
};
