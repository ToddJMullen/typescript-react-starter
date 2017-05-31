/***********************
 *	Project		: my-react-app
 *	Document	: Hello.tsx
 *	Created		: May 30, 2017, 10:06:48 PM
 *	Author		: Todd Mullen
 *	Description	:
 *		The Hello container handles functionality related to Hello.
 **/

import Hello from "../components/Hello";
import * as actions from "../actions/";
import {StoreState} from "../types/index";
import {connect, Dispatch} from "react-redux";

/**
 * Defines a conversion from the Store values into the component's needed properties
 * like an Adapter or Bridge class
 * @param StoreState
 */
export function mapStateToProps({enthusiasmLevel, languageName}: StoreState) {
	return {
		enthusiasmLevel
		, name: languageName
	}
}

/**
 * Setup the bindings between the Hello component's dispatched events and the
 * methods to invoke
 * @param EnthusiasmAction
 */
export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
	return {
		onIncrement		: () => dispatch(actions.incrementEnthusiasm())
		, onDecremen	: () => dispatch(actions.decrementEnthusiasm())
	}
}

export default connect( mapStateToProps, mapDispatchToProps )(Hello);



