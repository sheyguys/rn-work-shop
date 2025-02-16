import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import type {CoinData} from '../../services/coingecko';
import CoinCard from '../CoinCard';

const fakeCoin: CoinData = {
  symbol: 'btc',
  name: 'Bitcoin',
  image: 'https://crypto.com/bitcoin.png',
  current_price: 45000,
} as CoinData;

describe('CoinCard Component', () => {
  test('renders coin details correctly', () => {
    const {getByRole} = render(
      <CoinCard coin={fakeCoin} like={false} onLike={jest.fn()} />,
    );

    expect(getByRole('text', {name: 'name'})).toHaveTextContent('Bitcoin');
    expect(getByRole('text', {name: 'symbol'})).toHaveTextContent('BTC');
    expect(getByRole('text', {name: 'price'})).toHaveTextContent('45000 USD');
  });

  test('calls onLike function when button is pressed', async () => {
    const fakeOnLike = jest.fn();
    const {getByRole} = render(
      <CoinCard coin={fakeCoin} like={false} onLike={fakeOnLike} />,
    );

    fireEvent.press(getByRole('button'));

    expect(fakeOnLike).toHaveBeenCalledWith('btc');
  });
});
