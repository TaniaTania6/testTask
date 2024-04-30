import React, { useContext, useCallback } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { ContextCard } from "../ContextCard";
import { ContextProfile } from "../ContextProfile";
import { EDIT_PROFILE, PRODUCT_DETAILS } from "../constants/Routing";
import { colors } from "../constants/Colors";

export const Profile = () => {
    const {items} = useContext(ContextCard);
    const {name, email} = useContext(ContextProfile);
    const {navigate} = useNavigation();
    
    const handleEditPress = useCallback(() => {
		navigate(EDIT_PROFILE)
	}, [navigate]);

    const handleMorePress = useCallback((item) => {
		navigate(PRODUCT_DETAILS, {productId: item.id});
	}, [navigate]);

    const EmptyList = () => (
        <View style={styles.centered}>
            <Text style={styles.emptyText}>No orders found</Text>
        </View>
    );

    const renderUserProfileBlock = useCallback(() => (
        <View style={styles.header}>
            <Text style={styles.name}>{name || 'no name'}</Text>
            <Text style={styles.email}>{email || 'no email'}</Text>
            <TouchableOpacity onPress={handleEditPress} activeOpacity={0.7} style={styles.button}>
                <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
        </View>
    ), [handleEditPress, name, email]);

    const renderItem = useCallback(({item}) => (
        <View style={styles.containerItem}>
            <View style={styles.productItem}>
                {item.product.image 
                    ? <Image style={styles.image} source={{ uri: item.product.image}} /> 
                    : <View style={styles.image}>
                        <Text>No image</Text>
                      </View>}
                <Text style={styles.lineLeft}>{item.product.title} x {item.qty} <Text style={styles.productTotal}>${item.price}</Text></Text>
            </View>
            <TouchableOpacity activeOpacity={0.7} style={[styles.button, styles.showMore]} onPress={() => handleMorePress(item)}>
                <Text style={styles.buttonText}>Show More Details</Text>
            </TouchableOpacity>
        </View>
	), [handleMorePress]);

  return (
    <View style={styles.container}>
      {renderUserProfileBlock()}
        <Text style={styles.listOrdersText}>List of orders</Text>
        <FlatList 
            contentContainerStyle={styles.productsListContainer}
            keyExtractor={(item) => item.id.toString()}
            data={items}
            renderItem={renderItem}
            ListEmptyComponent={EmptyList}
            showsVerticalScrollIndicator={false}
        />
    </View>
  )};

  const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        paddingTop: 20,
    },
    name: {
        textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 16,
        marginVertical: 5
    },
    email: {
        textAlign: 'center',
    },
    button: {
		padding: 5,
		borderRadius: 10,
        marginTop: 10,
        backgroundColor: colors.darkBlue,
	},
	buttonText: {
        textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 16,
        color: colors.white,
	},
    showMore: {
        alignSelf: 'flex-end', 
        width: '50%',
    },
    centered: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center",
    },
    emptyText: {
        color: colors.darkBlue,
    },
    containerItem: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: colors.lightestBlue,
    },
    productItem: {
		flexDirection: 'row',
	},
    image: {
        alignItems: 'center',
        justifyContent: 'center',
		width: 100,
        height: 100,
		marginRight: 5,
        backgroundColor: colors.lightGrey,
	},
    lineLeft: {
        fontWeight: 'bold',
		fontSize: 18,
		lineHeight: 40,
		color: colors.black,
	},
    productTotal: {
		fontWeight: 'bold',
	},
    listOrdersText: {
        fontWeight: 'bold',
        marginVertical: 15,
        fontSize: 18,
        color: colors.darkBlue,
    },
    productsListContainer: {
        flex: 1, 
    },
});
