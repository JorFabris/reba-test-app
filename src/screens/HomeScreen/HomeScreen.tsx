import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../assets/Colors';
import { DEFAULT_SHADOW } from '../../assets/Constants';
import styles from './HomeScreenStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';

const HomeScreen = () => {
    return (
        <View>
            <Text style={{
                fontWeight: 'bold',
                fontSize: 18,
                color: Colors.textColor,
                margin: 15
            }}>Products available</Text>
            <TouchableOpacity activeOpacity={0.87} style={{
                width: 'auto',
                backgroundColor: Colors.componentsColor,
                margin: 15,
                padding: 10,
                borderRadius: 10,
                ...DEFAULT_SHADOW
            }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={{ uri: 'https://iili.io/PUsO2p.jpg' }} style={{
                            height: 150,
                            width: 100,
                            borderRadius: 10,
                            marginRight: 10,
                        }} />
                        <View>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 16,
                                color: Colors.textColor,
                                marginBottom: 10
                            }}>Iphone 13 PRO MAX</Text>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 16,
                                color: Colors.textColor,
                                marginBottom: 10
                            }}>U$D 1399.00</Text>

                            <Text style={{ fontWeight: '400', color: Colors.textColor, fontSize: 16 }}>Capacity:  <Text style={{
                                fontWeight: 'bold',
                                fontSize: 16,
                                color: Colors.textColor,
                                marginBottom: 10
                            }}>1024 GB</Text></Text>
                            <View style={{ flex: 1 }} />

                        </View>


                    </View>
                    <View style={{ flexDirection: 'row' }}>

                        <Icon style={{ margin: 4, }} name='star' color={Colors.gold} solid />
                        <Text style={{ fontWeight: '600', fontSize: 12, color: Colors.textColor, marginTop: 2, }} >(5/5)</Text>
                    </View>

                </View>

            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;
