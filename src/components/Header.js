import React, {useCallback} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";

import { Cart } from "./Cart";
import { User } from "./User";
import { colors } from '../constants/Colors'

const Header = ({title, leftIcon}) => {
    const {goBack} = useNavigation();
    const insets = useSafeAreaInsets();

    const renderLeftIcon = useCallback(() => {
        switch (leftIcon) {
            case 'back':
              return (
              <TouchableOpacity onPress={goBack} activeOpacity={0.7}>
                <Icon name='arrow-left' size={16} color={colors.white}/>
              </TouchableOpacity>
              )
            default:
              return (
                <View style={styles.emptyLeftView} />
              )
        }
    }, [goBack]);

  return (
    <View style={[styles.header, {paddingTop: insets.top + 10}]}>
        {renderLeftIcon()}
        <Text style={styles.title}>{title}</Text>
        <View style={styles.buttonsContainer}>
            <User />
            <Cart />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        flexDirection: 'row',
        paddingBottom: 10,
        backgroundColor: colors.brightBlue,
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'right',
        fontSize: 22,
        flexGrow: 0.4,
        color: colors.white
    },
    emptyLeftView: {
        width: 16,
      },
});

Header.defaultProps = {
    leftIcon: undefined
};
export default Header;