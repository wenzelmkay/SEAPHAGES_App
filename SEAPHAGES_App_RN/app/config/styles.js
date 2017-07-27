/**
 * Created by wenzelmk on 7/27/17.
 */
import { StyleSheet, } from 'react-native';
import colors from '../config/colors';

export default styles = StyleSheet.create({
    containerMap: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
    },
   stylesMap: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    buttonRound:{
        backgroundColor: colors.secondary,
        borderColor: '#515356',
        borderWidth: 0,
        margin: 0,
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
    buttonBlock:{
        backgroundColor: colors.secondary,
        borderColor: '#515356',
        margin: 10,
    },
    buttonText: {
        color: colors.textWhite
    },
    header: {
        backgroundColor: colors.primary
    },
    headerTitle: {
        color: colors.textWhite,
    },
});