/***********************
 *	Project		: my-react-app
 *	Document	: index.tsx
 *	Created		: May 29, 2017, 7:54:05 PM
 *	Author		: Todd Mullen
 *	Description	:
 *		Defines actions & functions that can create the actions defined in the constants/index.tsx file
 **/

import * as constants from "../constants"

export interface IncrementEnthusiasm {
	type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
	type: constants.DECREMENT_ENTHUSIASM;
}

//Define another, more generic, type
export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

//Define an "Action Factory Method" (my coining/impression) for each.

export function incrementEnthusiasm(): IncrementEnthusiasm {
	return {
		type: constants.INCREMENT_ENTHUSIASM
	}
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
	return {
		type: constants.DECREMENT_ENTHUSIASM
	}
}


