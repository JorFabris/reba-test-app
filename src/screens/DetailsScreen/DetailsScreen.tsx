import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Colors} from '../../assets/Colors';
import StarsRate from '../../components/StarsRate/StarsRate';
import useDetails from '../../hooks/useDetails';
import styles from './DetailsScreenStyles';

const DetailsScreen = () => {
  const {selectedProduct, manageFavorites, showLoading} = useDetails();

  const mainButton = () => {
    return (
      <TouchableOpacity
        onPress={() => manageFavorites(selectedProduct!)}
        style={styles.button}>
        <Text style={styles.textButton}>{ selectedProduct!.favorite ? 'Remove Favorites' : 'Add Favorites'}</Text>
        <Icon
          name="heart"
          solid
          size={18}
          color={Colors.white}
          style={{marginLeft: 10}}
        />
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      {showLoading && selectedProduct === undefined && (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator />
        </View>
      )}
      {!showLoading && selectedProduct !== undefined && (
        <View style={{marginBottom: 350}}>
          <Image
            source={{uri: selectedProduct!.img}}
            style={{width: '100%', height: '40%'}}
            resizeMode={'contain'}
          />
          <View style={styles.containerRate}>
            <StarsRate
              iconSize={15}
              textSize={14}
              rate={selectedProduct!.rate}
              reviews={selectedProduct!.reviews}
            />
          </View>

          <Text style={styles.description}>{selectedProduct!.description}</Text>

          {mainButton()}
        </View>
      )}
    </ScrollView>
  );
};

export default DetailsScreen;
