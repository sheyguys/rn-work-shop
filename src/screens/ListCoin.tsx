import React from 'react';
import {FlatList, Image, SafeAreaView, Text, View} from 'react-native';
import styled from 'styled-components';
import coin from '../../mock.json';

const mockCoin: CoinData[] = coin;

interface CoinData {
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

const ContainerListCoin = styled(SafeAreaView)`
  flex: 1;
`;

const CoinCard = styled(View)`
  display: flex;
  height: 80px;
  flex-direction: row;
  align-items: center;
  padding-vertical: 4px;
  padding-horizontal: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #aeaeae;
`;

const ImageCoin = styled(Image)`
  width: 60px;
  height: 60px;
`;

const NameCoin = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  padding-horizontal: 10px;
`;

const PriceCoin = styled(Text)`
  font-size: 16px;
  padding-horizontal: 10px;
`;

const ListCoin = () => {
  return (
    <ContainerListCoin>
      <FlatList
        scrollEnabled
        data={mockCoin}
        renderItem={({item}: {item: CoinData}) => (
          <CoinCard>
            <ImageCoin source={{uri: item.image}} />
            <View>
              <NameCoin>{item.name}</NameCoin>
              <PriceCoin>{item.symbol.toUpperCase()}</PriceCoin>
              <PriceCoin>{item.current_price} USD</PriceCoin>
            </View>
          </CoinCard>
        )}
        keyExtractor={c => c.symbol}
      />
    </ContainerListCoin>
  );
};

export default ListCoin;
