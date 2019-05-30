import React from 'react';
import ReactDOM from 'react-dom';

function App() {
	return (
		<ul>
			<li>Hello</li>
			<li>Hi</li>
			<li>Hey</li>
		</ul>
	)
}

//JSX
ReactDOM.render(
	<App />
, 
	document.getElementById("root")
);

