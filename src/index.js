import React from "react"
import ReactDOM from "react-dom"

function App(){
	const fName = "Angad"
	const lName = "Budhathoki"
	return (
		<h1>Hello {lName + " " + fName}!</h1>
	)
}

ReactDOM.render(<App />,document.getElementById("root"))