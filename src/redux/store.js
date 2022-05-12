
import {dataReducer} from './storeData/dataReducer.js';
import {cartReducer} from './Cart/cartReducer'
import { combineReducers } from "redux";

import { createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const rootReducer = combineReducers({
    Data : dataReducer,
	Cart : cartReducer,

})

const store = createStore(
 rootReducer,
  composeWithDevTools()
);

export {store}

