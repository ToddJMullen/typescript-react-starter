/***********************
 *	Project		: my-react-app
 *	Document	: Hello.test.tsx
 *	Created		: May 29, 2017, 6:12:13 PM
 *	Author		: Todd Mullen
 *	Description	:
 *		The Hello.test.tsx file defines the requirements tests for the Hello.tsx component
 **/

import * as React from "react";
import * as enzyme from "enzyme";
import Hello from "./Hello";

it( 'renders the correct text when no enthusiasm level is given', () => {
	const hello = enzyme.shallow(<Hello name='Todd' />);
	expect(hello.find(".greeting").text()).toEqual("Hello Todd!");
});

it( 'renders the correct text with an explicit enthusiasm level of 1', () => {
	const hello = enzyme.shallow(<Hello name='Todd' enthusiasmLevel={1} />);
	expect(hello.find(".greeting").text()).toEqual("Hello Todd!");
})

it( 'renders the correct text with an enthusiasm level of 7', () => {
	const hello = enzyme.shallow(<Hello name="Todd" enthusiasmLevel={7} />);
	expect(hello.find(".greeting").text()).toEqual("Hello Todd!!!!!!!");
});

it( 'throws an error if given an enthusiasm level of 0', () => {
	expect( () => {
		 enzyme.shallow(<Hello name="Todd" enthusiasmLevel={0} />);
	}).toThrow();
});

it( 'throws an error if given a negative enthusiasm level', () => {
	expect( () => {
		enzyme.shallow(<Hello name="Todd" enthusiasmLevel={-1} />)
	}).toThrow();
})


