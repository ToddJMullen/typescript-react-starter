import * as React from 'react';
import * as ReactDOM from 'react-dom';
//import App from './App';
//import Hello from './components/Hello';
import Hello from './containers/Hello';
import { Provider } from "react-redux";

import registerServiceWorker from './registerServiceWorker';
import './index.css';
/*
ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
*/
ReactDOM.render(
	<Hello name='First Test' enthusiasmLevel={12} />
	,document.getElementById("root") as HTMLElement
)


registerServiceWorker();

/**
 * Define an object ot store global application state.
 */
import { createStore } from "redux";
import { enthusiasm } from "./reducers/index";
import { StoreState } from "./types/index";

const store = createStore<StoreState>(enthusiasm, {
	enthusiasmLevel: 1
	,languageName: "TypeScript"
});

ReactDOM.render(
	<Provider store={store}>
		<Hello />
	</Provider>
	,document.getElementById("root") as HTMLElement
);



