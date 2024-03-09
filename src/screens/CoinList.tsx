import React, {useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import styled from 'styled-components';
import coin from '../../mock.json';
import CoinCard from '../components/CoinCard';

const mockCoin: CoinData[] = coin;

export interface CoinData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number | null;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: null | any;
  last_updated: string;
}

const ContainerCoinList = styled(SafeAreaView)`
  flex: 1;
`;

const CoinList = () => {
  const [listLike, setListLike] = useState<string[]>([]);

  const onLike = (coinSymbol: string) => {
    setListLike([...listLike, coinSymbol]);
  };

  return (
    <ContainerCoinList>
      <FlatList
        scrollEnabled
        data={mockCoin}
        renderItem={({item}: {item: CoinData}) => (
          <CoinCard
            coin={item}
            like={listLike.some(ll => ll === item.symbol)}
            onLike={onLike}
          />
        )}
        keyExtractor={c => c.symbol}
      />
    </ContainerCoinList>
  );
};

export default CoinList;
