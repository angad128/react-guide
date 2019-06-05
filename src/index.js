import React from "react"
import ReactDOM from "react-dom"

function App() {
	const date = new Date()
	const hours = date.getHours()
	let timeofDay

	const myStyles = {
		color: "#ff8c00", 
		fontSize: "40px",
		paddindTop: "20px",
		paddindButtom: "20px",
		paddindLeft: "20px",
		paddindRight: "20px"
	}

	if(hours <12) {
		timeofDay = "morning"
		myStyles.backgroundColor = "green"
	} else if(hours >=12 && hours <17) {
		timeofDay = "afternoon"
		myStyles.backgroundColor = "red"
	} else {
		timeofDay = "goodnight"
		myStyles.backgroundColor = "yellow"
	}

	return (
		<h1 style={myStyles}>Good {timeofDay}!</h1>
	)
}


ReactDOM.render(<App />, document.getElementById("root"))