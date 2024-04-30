/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ProductsList } from "../../src/screens/ProductsList";
import { ProductDetails } from "../..//src/screens/ProductDetails";
import { CartProvider } from "../../src/ContextCard";
import { ProfileProvider } from "../ContextProfile";
import { CartList } from "../../src/screens/CartList";
import { Profile } from "../../src/screens/Profile";
import { EditProfile } from "../../src/screens/EditProfile";
import Header from "../../src/components/Header";
import { PROFILE, EDIT_PROFILE, CART_LIST, PRODUCTS, PRODUCT_DETAILS } from '../../src/constants/Routing';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <ProfileProvider>
      <CartProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name={PRODUCTS} component={ProductsList} options={() => ({header: () => <Header title='Products' />})}/>
            <Stack.Screen name={PRODUCT_DETAILS} component={ProductDetails} options={() => ({header: () => <Header title='Product Details' leftIcon='back' />})}/>
            <Stack.Screen name={CART_LIST} component={CartList} options={() => ({header: () => <Header title='Cart' leftIcon='back'/>})} />
            <Stack.Screen name={PROFILE} component={Profile} options={() => ({header: () => <Header title='Profile' leftIcon='back'/>})}/>
            <Stack.Screen name={EDIT_PROFILE} component={EditProfile} options={() => ({header: () => <Header title='Edit Profile' leftIcon='back'/>})}/>
          </Stack.Navigator>
        </NavigationContainer>
      </CartProvider>
    </ProfileProvider>
  );
}
