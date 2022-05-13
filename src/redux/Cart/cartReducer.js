import { ADDTOCART, CURRENTITEM,ADJUSTQTY, REMOVECART } from './actionTypes'



const INITIAL_STATE = {
	products:[],
	cart:[],
	currentItem:null
}


export const cartReducer = (state=INITIAL_STATE, action) => {

	switch (action.type) {
    case ADDTOCART : 
	return {
		...state,
		cart:[...state.cart,action.payload],
	}

	case REMOVECART : 
	const data1 = state.cart.filter((el) => el.id !== action.payload.id)  
	//console.log(data)
	return {
		...state,
		cart:data1
     
	}
	case ADJUSTQTY : 
	return {
    
	}
	case CURRENTITEM : 
	return {
    
	}
	default: return state
	}
}