import type {Middleware} from 'redux';
import type {Dispatch, Store} from 'redux';
import {getCoinList} from '../../services/coingecko';
import {CoinAction} from './actions';

const coinMiddleware =
  ({dispatch}: Store) =>
  (next: Dispatch) =>
  (action: CoinAction) => {
    const {type} = action;

    switch (type) {
      case 'FETCH_COIN_LIST':
        getCoinList(dispatch);
        break;
      default:
        break;
    }

    return next(action);
  };

export default coinMiddleware as Middleware<{}, any, Dispatch<CoinAction>>;
