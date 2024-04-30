import React, { useState, useCallback } from "react";
import { FlatList, StyleSheet, TextInput, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { getProducts } from "../service/Products";
import { Product } from "../components/Product";
import { PRODUCT_DETAILS } from "../constants/Routing";
import { colors } from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";

export const ProductsList = () => {
   const {navigate} = useNavigation();
    const [search, setSearch] = useState('');
    const insets = useSafeAreaInsets();
    const products = getProducts();

    const handleProduct = useCallback((productId) => {
        navigate(PRODUCT_DETAILS, {productId})
    }, [navigate]);

    const renderItem = useCallback(({item: product}) => (
        <Product 
            {...product}
            search={search}
            onPress={() => handleProduct(product.id)}
        />
    ), [handleProduct, search]);

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Icon name='search' size={16} color={colors.darkBlue}/>
                <TextInput placeholder="Search" onChangeText={(text)=>{setSearch(text)}}/>
            </View>
            <FlatList 
                contentContainerStyle={[styles.productsListContainer, {paddingBottom: insets.bottom + 10}]}
                keyExtractor={(item) => item.id.toString()}
                data={products}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    productsListContainer: {
      paddingVertical: 8,
      rowGap: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 5,
        borderRadius: 5,
        borderWidth: 2,
        paddingHorizontal: 10,
        padding: 16,
        marginBottom: 10,
        borderColor: colors.darkBlue,
    },
  });
  