import React from "react"
import ReactDOM from "react-dom"

function App() {
	const date = new Date()
	const hours = date.getHours()
	let timeofDay
	if(hours <12) {
		timeofDay = "morning"
	} else if(hours >=12 && hours <17) {
		timeofDay = "afternoon"
	} else {
		timeofDay = "goodnight"
	}
	return (
		<h1>Good {timeofDay}!</h1>
	)
}


ReactDOM.render(<App />, document.getElementById("root"))