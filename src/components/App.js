import React from "react"
import Joke from './Joke'

function App() {
	return (
		<div>
			<Joke 
				punchLine="Dame I dont havey any Questions........."
			/>
			<Joke 
				question="Ask me if I'm orange?"
				punchLine="You are not orange, Are U?"
			/>
			<Joke 
				question="What does 420 means?"
				punchLine="You"
			/>
			<Joke 
				question="Goof for You"
				punchLine="YEa"
			/>
			<Joke 
				question="WHO ARE YOU?"
				punchLine="YOU WILL KNOW."
			/>
			<Joke 
				question="WHY ELGALES FLY SO HIGH?"
				punchLine="IN search of best wuality."
			/>
		</div>
	)
}

export default App