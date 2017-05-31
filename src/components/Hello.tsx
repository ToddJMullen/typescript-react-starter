/***********************
 *	Project		: my-react-app
 *	Document	: Hello.tsx
 *	Created		: May 29, 2017, 4:12:42 PM
 *	Author		: Todd Mullen
 *	Description	:
 *		The Hello object handles functionality related to Hello.
 ***/

import * as React from 'react';
import "./Hello.css";

export interface Props {
	name: string;
	enthusiasmLevel?: number;// the ? demarks optional
	//callback optinons
	onIncrement?: () => void;
	onDecrement?: () => void;
}

//Declare / define the Hello component implementation.

function Hello({name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props) {
	if (enthusiasmLevel < 1) {
		throw new Error("You have to be more enthusiastic!!!")
	}

	return (
		<div className="hello">
			<div className="greeting">
				Hello {name + getExclamationMarks(enthusiasmLevel)}
			</div>
			<div>
				<button onClick={onDecrement}>--</button>
				<button onClick={onIncrement}>++</button>
			</div>
		</div>
	);
}

export default Hello;

// declare helpers

function getExclamationMarks(num: number) {
	return Array(num + 1).join("!");
}
