import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Colors } from '../../assets/Colors';
import StarsRate from '../../components/StarsRate/StarsRate';
import useDetails from '../../hooks/useDetails';
import styles from './DetailsScreenStyles';

const DetailsScreen = () => {
    const { selectProduct, saveFavorites } = useDetails();

    const mainButton = () => {
        return (
            <TouchableOpacity onPress={() => saveFavorites(selectProduct)} style={styles.button}>
                <Text style={styles.textButton}>Add Favorites</Text>
                <Icon name="heart" solid size={18} color={Colors.white} style={{ marginLeft: 10 }} />
            </TouchableOpacity>
        );
    };

    return (
        <ScrollView contentContainerStyle={{ flex: 1 }}>

            <View style={{ marginBottom: 350 }}>

                <Image source={{ uri: selectProduct.img }} style={{ width: '100%', height: '40%' }} resizeMode={'center'} />
                <View style={styles.containerRate}>
                    <StarsRate iconSize={15} textSize={14} rate={selectProduct.rate} reviews={selectProduct.reviews} />
                </View>


                <Text style={styles.description}>{selectProduct.description}</Text>

                {mainButton()}
            </View>
        </ScrollView>
    );
};

export default DetailsScreen;
