

import { STORE_DATA } from "./actionType"



const storeData = (payload) => ({
	type: STORE_DATA,
	payload:payload
})

export { storeData}