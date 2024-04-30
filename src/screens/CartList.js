import React, { useCallback, useContext } from "react";
import { View, Image, Text, FlatList, StyleSheet } from "react-native";

import { ContextCard } from "../ContextCard";
import { colors } from '../constants/Colors'

export const CartList = () => {
    const {items, totalPrice} = useContext(ContextCard);

    const renderFooter = useCallback(() => (
		<View style={styles.cartLineTotal}>
			<Text style={styles.lineLeft}>Total</Text>
			<Text style={styles.mainTotal}>$ {totalPrice}</Text>
		</View>
	), [totalPrice]);

    const renderItem = useCallback(({item}) => (
		<View style={styles.cartLine}>
			{item.product.image 
				? <Image style={styles.image} source={{ uri: item.product.image}} /> 
				: <View style={styles.image}>
					<Text>No image</Text>
				</View>
			}
			<Text style={styles.lineLeft}>{item.product.title} x {item.qty} <Text style={styles.productTotal}>${item.price}</Text></Text>
		</View>
	), []);

    return (
        <FlatList
            contentContainerStyle={styles.itemsListContainer}
            data={items}
            renderItem={renderItem}
            keyExtractor={(item) => item.product.id.toString()}
            ListFooterComponent={renderFooter}
			showsVerticalScrollIndicator={false}
        />
    )
}

const styles = StyleSheet.create({
	cartLine: {
		flexDirection: 'row',
		columnGap: 8,
		paddingVertical: 10,
		paddingHorizontal: 10,
		borderRadius: 10,
		backgroundColor: colors.lightestBlue,
	},
	image: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        backgroundColor: colors.lightGrey,
    },
	cartLineTotal: {
		flexDirection: 'row',
		borderTopWidth: 2,
		borderTopColor: colors.brightBlue,
	},
	productTotal: {
		fontWeight: 'bold',
		flexShrink: 1,
	},
	lineLeft: {
		fontSize: 20,
		lineHeight: 28,
		fontWeight: 'bold',
		flexShrink: 1,
		color: colors.black,
	},
	mainTotal: {
		textAlign: 'right',
		flex: 1,
		fontSize: 20,
		fontWeight: 'bold',
		lineHeight: 28,
		color: colors.darkGrey,
	},
	itemsListContainer: {
		paddingVertical: 8,
		marginHorizontal: 15,
		borderBottomRightRadius: 10,
		borderBottomLeftRadius: 10,
		rowGap: 10,
	}
})