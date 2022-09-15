import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { Colors } from '../../assets/Colors';
import CustomCardProduct from '../../components/CustomCardProduct/CustomCardProduct';
import useHome from '../../hooks/useHome';


const HomeScreen = () => {

    const { products } = useHome();

    return (
        <SafeAreaView style={{ marginBottom: 130 }}>
            <View>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 18,
                    color: Colors.textColor,
                    margin: 15
                }}>Products available</Text>

                <FlatList data={products}
                    renderItem={({ item }) => <CustomCardProduct product={item} />}
                />

            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
