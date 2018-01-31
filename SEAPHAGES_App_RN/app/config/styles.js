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
   bgContainer: { flex:1, width: null, height: null },
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
    buttonBordered:{
        borderColor: colors.secondary,
        margin: 10,
    },
    buttonFilledText: {
        color: colors.textWhite,
    },
    buttonBorderedText: {
        color: colors.secondary,
    },
    buttonTransparent: {
        color: colors.secondary,
    },
    header: {
        backgroundColor: colors.primary
    },
    headerTitle: {
        color: colors.textWhite,
    },
    contentStyle: {
        padding: 10,
    },
    callout:{
        flex: 1,
        paddingRight: 10,
        paddingBottom: 10,
        marginRight: 10,
        marginBottom: 10
    },
    link:{
      flex: 1,
      color: colors.link,
      justifyContent: 'center',
      paddingRight: 10,
      paddingTop: 10,
      marginLeft: 10,
      marginTop: 10
    },
    cardHeaderText:{
        color: colors.textDark,
    },
    cardPrimaryText:{
        color: colors.textDark,
    },
    cardSecondaryText:{
        color: colors.textMedium,
    },
    cardTertiaryText:{
        color: colors.textLight,
    },
    extraPadding:{
        paddingBottom: 10,
    },

});
