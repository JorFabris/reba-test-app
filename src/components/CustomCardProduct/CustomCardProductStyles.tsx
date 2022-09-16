import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/Colors';
import {DEFAULT_SHADOW} from '../../assets/Constants';

const styles = StyleSheet.create({
  card: {
    width: 'auto',
    backgroundColor: Colors.componentsColor,
    margin: 15,
    padding: 10,
    borderRadius: 10,
    ...DEFAULT_SHADOW,
  },
  imgProduct: {
    height: 150,
    width: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.textColor,
    marginBottom: 10,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.textColor,
    marginBottom: 10,
  },
  capacity: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.textColor,
    marginBottom: 10,
  },
  rates: {
    fontWeight: '600',
    fontSize: 12,
    color: Colors.textColor,
    marginTop: 2,
  },
});

export default styles;
