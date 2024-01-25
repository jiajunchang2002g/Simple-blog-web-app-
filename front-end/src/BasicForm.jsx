import React, { useState } from 'react'

function BasicForm() {
	const[name,setName]=useState([])
	const[body,setBody]=useState([])

	function handleSubmit(){ 
		e.preventDefault();
		axios.post('http://localhost:3000/post', 
			{ commenter : {name}
			   body : {body}
			}
		)
	}

	return ( 
		<form onSubmit={handleSubmit}>
			<textarea 
				placeholder="Name"
				value={name}
				onChange={e => setName(e.target.value)}
		/>
			<textarea 
				placeholder="Body"
				value={body}
				onChange={e => setBody(e.target.value)}
		/>
		<button type="submit">Send</button>
		</form>
	);
}

