import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../assets/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './CustomCardProductStyles';
import {IProducts} from '../../models/IProducts';
import StarsRate from '../StarsRate/StarsRate';

interface IProps {
  product: IProducts;
  onPress: (product: IProducts) => void;
}

const CustomCardProduct = ({product, onPress}: IProps) => {


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
                <StarsRate rate={product.rate} reviews={product.reviews} />

          </View>
        </View>
        {product.favorite &&  <Icon name="heart" solid size={18} color={Colors.errorColor} />}
      </View>
    </TouchableOpacity>
  );
};

export default CustomCardProduct;
