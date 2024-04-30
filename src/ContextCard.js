import React, { createContext, useState, useMemo, useCallback } from "react";
import { getProduct } from "./service/Products";

export const ContextCard = createContext();

export const CartProvider = (props) => {

    const [items, setItems] = useState([]);

    const addItemToCart = useCallback ((id) => {
        const product = getProduct(id);
        setItems((prevItems) => {
            const item = prevItems.find((item) => (item.id == id));

            if (!item) {
                return [...prevItems, {
                    id, 
                    qty: 1,
                    product, 
                    price: product.price
                }]
            }

            return prevItems.map((item) => {
                if (item.id == id) {
                    item.qty++;
                    item.price += product.price;
                }
                
                return item;
            })
        })
    }, [])

    const itemsCount = useMemo(() => items.reduce((sum,item) => (sum + item.qty), 0), [items]);

    const totalPrice = useMemo(() => items.reduce((sum, item) => (sum + item.price), 0), [items]);

    const value = useMemo(() => ({items, itemsCount, addItemToCart, totalPrice}),
        [items, itemsCount, addItemToCart, totalPrice]
      );

    return(
        <ContextCard.Provider value={value}>
            {props.children}
        </ContextCard.Provider>
    )
}