import React from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Text,
} from 'react-native';

import  { colors } from '../constants/Colors';

export const InputContainer = ({
  children,
  label,
  backgroundColor,
  style,
}) => {
  return (
    <View style={style}>
      <Text style={styles.label}>{label}</Text>
      <Animated.View
        style={[
          styles.animatedTextInputWrapper,
          {backgroundColor: backgroundColor},
        ]}>
        <View style={styles.textInputWrapper}>{children}</View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginVertical: 4,
    fontSize: 13,
    lineHeight: 20,
    color: colors.darkGrey,
  },
  animatedTextInputWrapper: {
    padding: 1,
    borderRadius: 8,
  },
  textInputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
    backgroundColor: colors.white,
  },
  textInput: {
    padding: 16,
    fontSize: 15,
    fontWeight: '500',
    color: colors.black,
  },
  disabledInputWrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
});
