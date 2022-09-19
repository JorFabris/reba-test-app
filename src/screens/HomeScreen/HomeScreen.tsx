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
  const {products, selectProduct, showLoading, fetchData} = useHome({navigation});

  return (
    <SafeAreaView style={styles.screen}>
      <View>
        <Text style={styles.title}>Products available</Text>
        {showLoading && products.length === 0 && (
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size={35} />
          </View>
        )}
        {!showLoading && products.length !== 0 && (
          <FlatList
            data={products}
            onRefresh={fetchData}
            refreshing={showLoading}
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
