import React, { useContext, useCallback, useMemo } from 'react';
import { Text, StyleSheet, View, Image, ScrollView, TouchableOpacity } from "react-native";
import SafeAreaView from 'react-native-safe-area-view';
import { useRoute } from '@react-navigation/native';

import { getProduct } from "../service/Products";
import { ContextCard } from "../ContextCard";
import { colors } from "../constants/Colors";

export const ProductDetails = () => {
  const {params} = useRoute();

  const product = useMemo(() => getProduct(params.productId), [params]);

  const {addItemToCart} = useContext(ContextCard);

  const onAddToCart = useCallback(() => {
    addItemToCart(product.id)
  }, [addItemToCart, product]);

  return (
    <SafeAreaView>
        <ScrollView>
            <View style={styles.imageContainer}>
              {product.image 
                ? <Image style={styles.image} source={{uri: product.image}} /> 
                : <View style={styles.image}>
                    <Text>No image</Text>
                  </View>
              }
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.title}>{product.title}</Text>
              <Text style={styles.price}>$ {product.price}</Text>
              <Text style={styles.description}>{product.product_type}</Text>
              <TouchableOpacity onPress={onAddToCart} activeOpacity={0.7} style={styles.button}>
                <Text style={styles.buttonText}>Add To Cart</Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    imageContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10
    },
    image: {
      alignItems:'center',
      justifyContent:'center',
      width: 200,
      height: 200,
      backgroundColor: colors.lightGrey,
    },
    infoContainer: {
      padding: 16
    },
    title: {
      fontWeight: 'bold',
      fontSize: 22,
    },
    price: {
      fontWeight: '600',
      fontSize: 16,
      marginBottom: 8,
    },
    description: {
      fontSize: 16,
      marginBottom: 16,
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
  });