import {useEffect, useState} from "react";
import storageService from "../services/StorageService.js";

const useCart = (initialValue = [], key = "cart") => {
    const [cartItems, setCartItems] = useState(initialValue);

    const addToCart = (item) => {
        setCartItems((prev) => [...prev, {...item, id: Date.now()}]);
    }

    const removeCartItemById = (id) => {
        setCartItems((prev) => {
            prev = [...prev];

            prev = prev.filter((item) => item.id !== id);

            return prev;
        })
    }

    useEffect(() => {
        if (!storageService.isNull(key)) {
            setCartItems(storageService.get(key));
        }
    }, []);

    useEffect(() => {
        storageService.set(key, cartItems);
    }, [cartItems.length]);

    return {
        cartItems,
        setCartItems,
        addToCart,
        removeCartItemById
    };
}

export default useCart;