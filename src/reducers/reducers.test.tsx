/***********************
 *	Project		: my-react-app
 *	Document	: reducers.test.tsx
 *	Created		: May 29, 2017, 11:08:59 PM
 *	Author		: Todd Mullen
 *	Description	:
 *		The reducers.test file defines unit tests for the EnthusiasmAction reducer.
 **/

//I will have to figure out what's wrong here...
//"TypeError: index_1.default is not a function
// at Object.<anonymous> (src/reducers/reducers.test.tsx:19:33)"



import * as React from "react";
import * as enzyme from "enzyme";
import enthusiasm from "./index";
import { EnthusiasmAction } from "../actions";
import { StoreState } from "../types/index";
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from "../constants/index";

it( "Increases enthusiasm state by 1 when incremented", () => {
	//setup start state
	let state:StoreState = {} as StoreState;
	state.languageName = "TypeScript";
	state.enthusiasmLevel = 2;

	//now increment enthusiasm
	let state2:StoreState = enthusiasm( state, INCREMENT_ENTHUSIASM );
	expect( state2.enthusiasmLevel ).toEqual(3);
});



