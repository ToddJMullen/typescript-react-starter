/***********************
 *	Project		: my-react-app
 *	Document	: index.tsx
 *	Created		: May 29, 2017, 10:40:23 PM
 *	Author		: Todd Mullen
 *	Description	:
 *		Defines the reducers that produce the changes in application state.
 **/

import { EnthusiasmAction } from "../actions";
import { StoreState } from "../types/index";
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from "../constants/index";

export function enthusiasm( state: StoreState, action: EnthusiasmAction ): StoreState {
	switch( action.type ){
		case INCREMENT_ENTHUSIASM:
			return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
		case DECREMENT_ENTHUSIASM:
			return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
	}
	return state;
}//enthusiasm




