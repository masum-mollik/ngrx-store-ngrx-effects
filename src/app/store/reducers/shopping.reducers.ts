import { ShoppingItem } from './../models/shopping-item.models';
import {
  ShoppingActions,
  ShoppingActionTypes,
} from '../actions/shopping.actions';

const initialState: ShoppingState = {
  list: [],
  loading: false,
  error: undefined,
};

export interface ShoppingState {
  list: ShoppingItem[];
  loading: boolean;
  error: Error;
}

// export function ShoppingReducer(
//   state: ShoppingState = initialState,
//   action: ShoppingActions
// ): ShoppingItem[] {
//   switch (action.type) {
//     case ShoppingActionTypes.ADD_ITEM: {
//       return [...state, action.payload];
//     }
//     case ShoppingActionTypes.DELETE_ITEM:
//       return state.filter((item) => item.id !== action.payload);
//     default: {
//       return state;
//     }
//   }
// }

export function ShoppingReducer(
  state: ShoppingState,
  action: ShoppingActions
): ShoppingState {
  switch (action.type) {
    case ShoppingActionTypes.LOAD_SHOPPING:
      return { ...state, loading: true };
    case ShoppingActionTypes.LOAD_SHOPPING_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false,
      };
    case ShoppingActionTypes.LOAD_SHOPPING_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case ShoppingActionTypes.ADD_ITEM:
      return {
        ...state,
        loading: true,
      };
    case ShoppingActionTypes.ADD_ITEM_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false,
      };
    case ShoppingActionTypes.ADD_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case ShoppingActionTypes.DELETE_ITEM:
      return {
        ...state,
        loading: true,
      };
    case ShoppingActionTypes.DELETE_ITEM_SUCCESS:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload),
        loading: false,
      };
    case ShoppingActionTypes.DELETE_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
