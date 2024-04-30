import React, { useContext, useCallback } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";

import { ContextCard } from "../ContextCard";
import { CART_LIST } from "../constants/Routing";
import { colors } from "../constants/Colors";

export const Cart = () => {
	const {navigate} = useNavigation();
    const {itemsCount} = useContext(ContextCard);

	const handlePress = useCallback(() => navigate(CART_LIST), [navigate])
    return(
        <TouchableOpacity onPress={handlePress} style={styles.container} activeOpacity={0.7}>
            <Icon name='shopping-basket' size={16} color={colors.white}/>
            <Text style={styles.text} onPress={handlePress}>
                Cart ({itemsCount})
            </Text>
		</TouchableOpacity>
    )
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 8,
		padding: 5,
		borderRadius: 10,
		rowGap: 4,
		backgroundColor: colors.darkBlue,
	},
	text: {
		fontWeight: 'bold',
		fontSize: 13,
		color: colors.white,
	}
})