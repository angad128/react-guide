import React from "react"
import ContactCard from './ContactCard'



function App(){
	return (
		<div>
			<ContactCard contact={{name:"Mr.WHite", imgUrl:"http://placekitten.com/300/200", phone:"+977-9841 XXXXXX", email:"mr.white@email.com" }}/>
			<ContactCard contact={{name:"Mr.red", imgUrl:"http://placekitten.com/300/200", phone:"+977-9843 XXXXXX", email:"mr.red@email.com" }}/>
			<ContactCard contact={{name:"Mr.Black", imgUrl:"http://placekitten.com/300/200", phone:"+977-9842 XXXXXX", email:"mr.black@email.com" }}/>
			<ContactCard contact={{name:"Mr.Yellow", imgUrl:"http://placekitten.com/300/200", phone:"+977-9845 XXXXXX", email:"mr.yellow@email.com" }}/>
			
		</div>
	)
}

export default App