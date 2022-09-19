import { StyleSheet } from 'react-native';
import { Colors } from '../../assets/Colors';


const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.mainColor,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 10,
        flexDirection: 'row',
    },
    textButton: { fontWeight: 'bold', fontSize: 15, color: Colors.white },
    description: { fontSize: 14, textAlign: 'justify', margin: 15 },
    containerRate:{ flexDirection: 'row', justifyContent: 'flex-end', margin: 10 },
});


export default styles;
