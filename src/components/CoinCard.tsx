import {View} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import unLikeIcon from '../assets/images/un-like.png';
import likeIcon from '../assets/images/like.png';
import type {CoinData} from '../services/coingecko';

const ContainerCard = styled.View`
  display: flex;
  height: 80px;
  flex-direction: row;
  align-items: center;
  padding-vertical: 4px;
  padding-horizontal: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #aeaeae;
`;

const WrapContentCoin = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

const ImageCoin = styled.Image`
  width: 60px;
  height: 60px;
`;

const NameCoin = styled.Text`
  font-size: 20px;
  font-weight: bold;
  padding-horizontal: 10px;
`;

const PriceCoin = styled.Text`
  font-size: 16px;
  padding-horizontal: 10px;
`;

const ContainerButtonLike = styled.TouchableOpacity`
  justify-content: center;
  padding-right: 20px;
`;

const ImageButtonLike = styled.Image`
  width: 30px;
  height: 26px;
`;

const CoinCard = ({
  coin,
  like,
  onLike,
}: {
  coin: CoinData;
  like: boolean;
  onLike: (coinSymbol: string) => void;
}) => {
  return (
    <ContainerCard>
      <ImageCoin source={{uri: coin.image}} />
      <WrapContentCoin>
        <View>
          <NameCoin>{coin.name}</NameCoin>
          <PriceCoin>{coin.symbol.toUpperCase()}</PriceCoin>
          <PriceCoin>{coin.current_price} USD</PriceCoin>
        </View>
        <ContainerButtonLike onPress={() => onLike(coin.symbol)}>
          <ImageButtonLike source={like ? likeIcon : unLikeIcon} />
        </ContainerButtonLike>
      </WrapContentCoin>
    </ContainerCard>
  );
};

export default CoinCard;
