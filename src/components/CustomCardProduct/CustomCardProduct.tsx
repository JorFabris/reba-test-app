

import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../assets/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './CustomCardProductStyles';
const RATE = 4;
const CustomCardProduct = () => {

    const renderStars = () => {
        const STARS = []
        for (let index = 1; index <= RATE; index++) {
            STARS.push(
                <Icon style={{ margin: 4, }} name='star' color={Colors.gold} solid />
            )
        }
        if ((RATE % 1) !== 0) {
            STARS.push(
                <Icon style={{ margin: 4, }} name='star-half' color={Colors.gold} solid />
            )
        }

        return STARS;
    }


    return (
        <TouchableOpacity activeOpacity={0.87} style={styles.card}>
            <View style={{ flexDirection: 'row', }}>

                <Image source={{ uri: 'https://iili.io/PUsO2p.jpg' }} style={styles.imgProduct} />
                <View style={{ flex: 1, }}>
                    <Text style={styles.productName}>Iphone 13 PRO MAX</Text>
                    <Text style={styles.price}>U$D 1399.00</Text>

                    <Text style={{ fontWeight: '400', color: Colors.textColor, fontSize: 16 }}>Capacity:
                        <Text style={styles.capacity}>1024 GB</Text></Text>
                    <View style={{ flex: 1 }} />

                    <View style={{ flexDirection: 'row', }}>
                        {renderStars()}
                        <Text style={{ fontWeight: '600', fontSize: 12, color: Colors.textColor, marginTop: 2, }} >{RATE} (343)</Text>
                    </View>

                </View>





            </View>


        </TouchableOpacity>
    )
}


export default CustomCardProduct;