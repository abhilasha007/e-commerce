import axios from 'axios'
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'

export const addToCart = (id, qty) => async(dispatch, getState) => {
    // getState --> global access to all state
    const { data } = await axios.get(`/api/products/${id}`)
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    }) // to reducer

    // local storage only has string values
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}