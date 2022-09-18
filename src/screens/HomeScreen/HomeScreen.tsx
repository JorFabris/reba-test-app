import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import CustomCardProduct from '../../components/CustomCardProduct/CustomCardProduct';
import useHome from '../../hooks/useHome';
import {IProducts} from '../../models/IProducts';
import styles from './HomeScreenStyles';
interface IProps {
  navigation: StackNavigationProp<any, any>;
}

const HomeScreen = ({navigation}: IProps) => {
  const {products, selectProduct, showLoading} = useHome({navigation});

  return (
    <SafeAreaView style={styles.screen}>
      <View>
        <Text style={styles.title}>Products available</Text>
        {showLoading && products?.length === 0 && (
          <ActivityIndicator size={25} />
        )}
        {!showLoading && products?.length !== 0 && (
          <FlatList
            data={products}
            renderItem={({item}) => (
              <CustomCardProduct
                onPress={(product: IProducts) => selectProduct(product)}
                product={item}
              />
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
