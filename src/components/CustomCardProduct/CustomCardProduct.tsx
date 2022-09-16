import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../assets/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './CustomCardProductStyles';
import {IProducts} from '../../models/IProducts';

interface IProps {
  product: IProducts;
  onPress: (product: IProducts) => void;
}

const CustomCardProduct = ({product, onPress}: IProps) => {
  const renderStars = () => {
    const STARS = [];
    for (let index = 1; index <= product.rate; index++) {
      STARS.push(
        <Icon
          key={`star-${index}`}
          style={{margin: 4}}
          name="star"
          color={Colors.gold}
          solid
        />,
      );
    }
    if (product.rate % 1 !== 0) {
      STARS.push(
        <Icon
          key={`star-${new Date().getTime()}`}
          style={{margin: 4}}
          name="star-half"
          color={Colors.gold}
          solid
        />,
      );
    }

    return STARS;
  };

  return (
    <TouchableOpacity onPress={() => onPress(product)} key={product.id} activeOpacity={0.77} style={styles.card}>
      <View style={{flexDirection: 'row'}}>
        <Image source={{uri: product.img}} style={styles.imgProduct} />
        <View style={{flex: 1}}>
          <Text style={styles.productName}>{product.title}</Text>
          <Text style={styles.price}>U$D {product.price.toFixed(2)}</Text>

          <Text
            style={{fontWeight: '400', color: Colors.textColor, fontSize: 16}}>
            Capacity:
            <Text style={styles.capacity}>{product.capacity} GB</Text>
          </Text>
          <View style={{flex: 1}} />

          <View style={{flexDirection: 'row'}}>
            {renderStars()}
            <Text style={styles.rates}>
              {product.rate} ({product.reviews})
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CustomCardProduct;
