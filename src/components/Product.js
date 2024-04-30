import React from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";

import { colors } from '../constants/Colors';

export const Product = ({title, price, image, onPress, search}) => {
    if(search === ''){
        return (
            <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
                {image 
                    ? <Image style={styles.image} source={{uri:image}} /> 
                    : <View style={styles.image}>
                        <Text>No image</Text>
                    </View>
                }
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.price}>$ {price}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    if(title.toLowerCase().includes(search.toLowerCase())){
        return(
            <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
                {image 
                    ? <Image style={styles.image} source={{uri:image}} /> 
                    : <View style={styles.image}>
                        <Text>No image</Text>
                    </View>
                }
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.price}>$ {price}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return null;
};

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        paddingTop: 10,
        backgroundColor: colors.lightestBlue,
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
        marginBottom: 8
    }
})