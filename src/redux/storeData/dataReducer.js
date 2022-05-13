import { STORE_DATA } from "./actionType"

const initState = {
	data:[]
}

const dataReducer = (state = initState,action) => {

	switch (action.type) {
		case STORE_DATA : 
		return {
			...state,
			data: action.payload
		}

		default :return state
	}

}

export { dataReducer}