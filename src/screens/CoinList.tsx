import {connect} from 'react-redux';
import React, {FC, useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import CoinCard from '../components/CoinCard';
import type {CoinData} from '../services/coingecko';
import coinActions from '../stores/coins/actions';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

const ContainerCoinList = styled.SafeAreaView`
  flex: 1;
`;

interface CoinListOwnProps {
  navigation: NavigationProp<ParamListBase>;
}

const CoinList: FC<CoinListProps> = props => {
  const {listCoin, fetchCoinList} = props;
  const [listLike, setListLike] = useState<string[]>([]);

  useEffect(() => {
    fetchCoinList();
  }, [fetchCoinList]);

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

interface CoinListStateProps {
  listCoin: CoinData[];
}

const mapStateToProps = (state: any): CoinListStateProps => {
  return {
    listCoin: state.coin.listCoin,
  };
};

interface CoinListDispatchProps {
  fetchCoinList: typeof coinActions.fetchCoinList;
}

const mapDispatchToProps: CoinListDispatchProps = {
  fetchCoinList: coinActions.fetchCoinList,
};

export type CoinListProps = CoinListStateProps &
  CoinListDispatchProps &
  CoinListOwnProps;

export default connect<
  CoinListStateProps,
  CoinListDispatchProps,
  CoinListOwnProps
>(
  mapStateToProps,
  mapDispatchToProps,
)(CoinList);
