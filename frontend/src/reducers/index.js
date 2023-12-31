import { combineReducers } from 'redux';
import {GET_ALL_PRODUCT,GET_NUMBER_CART,ADD_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, DELETE_CART, EMPTY_CART} from  '../action/action';

const initProduct = {
    numberCart:0,
    Carts:[],
    _products:[]
}

function todoProduct(state = initProduct,action){
    switch(action.type){
        case GET_ALL_PRODUCT: 
            return{
                ...state,
                _products:action.payload
            }
        case GET_NUMBER_CART:
                return{
                    ...state
                }
        case ADD_CART:
            if (state.numberCart === 0) {
                let cart = {
                id: action.payload.id,
                quantity: 1,
                product_name: action.payload.product_name,
                image: action.payload.image,
                price: action.payload.price,
                size: action.payload.size
                };
                state.Carts.push(cart);
            } else {
                let existingCartItem = state.Carts.find(
                (item) => (item.id === action.payload.id && item.size === action.payload.size)
                );
            
                if (existingCartItem) {
                    existingCartItem.quantity++;
                } else {
                let newCartItem = {
                    id: action.payload.id,
                    quantity: 1,
                    product_name: action.payload.product_name,
                    image: action.payload.image,
                    price: action.payload.price,
                    size: action.payload.size
                };
                state.Carts.push(newCartItem);
                }
            }
            
            return {
                ...state,
                numberCart: state.numberCart + 1,
            };
        case INCREASE_QUANTITY:
            state.numberCart++
            state.Carts[action.payload].quantity++;
            
            return{
                ...state
            }
        case DECREASE_QUANTITY:
            let quantity = state.Carts[action.payload].quantity;
            if(quantity>1){
                state.numberCart--;
                state.Carts[action.payload].quantity--;
            }
            
            return{
                ...state
            }
        case DELETE_CART:
            let quantity_ = state.Carts[action.payload].quantity;
            return {
                ...state,
                numberCart: state.numberCart - quantity_,
                Carts: state.Carts.filter((item, index) => index !== action.payload && (item.id !== state.Carts[action.payload].id || item.size !== state.Carts[action.payload].size))
            };
        case EMPTY_CART:
            return {
                ...state,
                numberCart: 0,
                Carts: [],
            };
        default:
            return state;
    }
}
const ShopApp = combineReducers({
    _todoProduct:todoProduct
});
export default ShopApp;