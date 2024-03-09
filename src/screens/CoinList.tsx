import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import CoinCard from '../components/CoinCard';
import {CoinData, getCoinList} from '../services/coingecko';

const ContainerCoinList = styled.SafeAreaView`
  flex: 1;
`;

const CoinList = () => {
  const [listLike, setListLike] = useState<string[]>([]);
  const [listCoin, setListCoin] = useState<CoinData[]>([]);

  const fetchCoinList = async () => {
    const response = await getCoinList();
    setListCoin(response);
  };

  useEffect(() => {
    fetchCoinList();
  }, []);

  const onLike = (coinSymbol: string) => {
    setListLike([...listLike, coinSymbol]);
  };

  return (
    <ContainerCoinList>
      <FlatList
        scrollEnabled
        data={listCoin}
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
