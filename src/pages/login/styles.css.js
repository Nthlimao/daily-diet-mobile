import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    text: {
        fontFamily: 'Segoeui-Regular',
        fontSize: 20,
    },
    inputGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F7F7F7',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 3,
        width: '100%',
        alignSelf: 'stretch',
        marginBottom: 15,
    },
    input: {
        flex: 1,
        height: 47,
        fontSize: 16,
        fontFamily: 'Segoeui-Regular',
    },
    icon: {
        tintColor: '#BAC2C4',
        paddingLeft: 10,
    },
    button: {
        height: 48,
        backgroundColor: '#96C5A4',
    },
    buttonTitle: {
        fontSize: 14,
        fontFamily: 'Barlow-Bold',
    },
    buttonClear: {
        fontFamily: 'Segoeui-Regular',
        fontSize: 14,
        color: '#96C5A4',
    },
    wrapBtn: {
        alignSelf: 'stretch',
        marginBottom: 10
    }
});

export default styles;