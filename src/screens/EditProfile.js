import React, { useRef, useContext, useCallback, useState } from "react";
import { View, Text, TextInput, StyleSheet, Keyboard, Animated, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ContextProfile } from "../ContextProfile";
import { InputContainer } from '../components/InputContainer';
import { PROFILE } from "../constants/Routing";
import { colors } from "../constants/Colors";

export const EditProfile = () => {
    const {goBack} = useNavigation();
    const {name, setName, email, setEmail} = useContext(ContextProfile);
    const [localName, setLocalName] = useState(name);
    const [localEmail, setLocalEmail] = useState(email);
    const nameAnimatedValue = useRef(new Animated.Value(0)).current;
    const emailAnimatedValue = useRef(new Animated.Value(0)).current;

    const getBgColor = (animatedValue) => {
        return animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [colors.lightGrey, colors.blue],
        });
    };

    const onFocus = useCallback((animatedValue) => {
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: false,
        }).start();
    }, []);

    const onBlur = useCallback((animatedValue) => {
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
        }).start();
    }, []);

    const onSave = useCallback(() => {
        setName(localName);
        setEmail(localEmail);
        goBack();
    }, [goBack, localName, localEmail]);

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <InputContainer
                    label="Name"
                    backgroundColor={getBgColor(nameAnimatedValue)}>
                        <TextInput
                            placeholder="Enter name"
                            style={styles.textInput}
                            placeholderTextColor={colors.darkGrey}
                            value={localName}
                            onChangeText={setLocalName}
                            onFocus={() =>
                                onFocus(nameAnimatedValue)
                            }
                            onBlur={() => onBlur(nameAnimatedValue)}
                            keyboardAppearance="light"
                            returnKeyType="done"
                        />
                </InputContainer>
                <InputContainer
                    label="Email"
                    backgroundColor={getBgColor(emailAnimatedValue)}>
                        <TextInput
                            placeholder="Enter email"
                            style={styles.textInput}
                            placeholderTextColor={colors.darkGrey}
                            value={localEmail}
                            onChangeText={setLocalEmail}
                            onFocus={() =>
                                onFocus(emailAnimatedValue)
                            }
                            onBlur={() => onBlur(emailAnimatedValue)}
                            keyboardAppearance="light"
                            returnKeyType="done"
                        />
                </InputContainer>
                <Text onPress={onSave} style={styles.saveButton}>Save</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        flex: 1,
    },
    saveButton: {
        alignSelf: 'flex-end',
        fontWeight: 'bold',
        fontSize: 16,
        color: colors.darkBlue,
    },
    textInput: {
        fontWeight: '500',
        width: '100%',
        padding: 16,
        fontSize: 15,
        color: colors.darkBlue,
    },
})