import { FlatList, Text, View } from 'react-native';
import { Colors } from '../../assets/Colors';
import CustomCardProduct from '../../components/CustomCardProduct/CustomCardProduct';


const HomeScreen = () => {
    return (
        <View>
            <Text style={{
                fontWeight: 'bold',
                fontSize: 18,
                color: Colors.textColor,
                margin: 15
            }}>Products available</Text>

            <FlatList data={[1, 2, 3, 4, 5, 6]}
                renderItem={() => <CustomCardProduct />}
            />

        </View>
    );
};

export default HomeScreen;
