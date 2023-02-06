import React, { useState } from 'react';
import Button from './Button';
import '../styles/FormInput.css';

export default function FormInput({add}) {
	const [text, setText] = useState('');

	const change = (e) => {
		setText(e.target.value)
	}

	const submit = (e) => {
		e.preventDefault();
		if(text !== ''){
			add(text);
		}
		setText('');
	};

	return (
		<form
			style={inputForm}
			onSubmit={submit}
		>
			<input
				type="text"
				onChange={change}
				value={text}
				style={input}
				placeholder="add task"
			/>
			<Button
				text="add"
				variant="primary"
				action={submit}
			/>
		</form>
	);
};


const inputForm = {
	background: '#fff',
	color: '#fff',
	display: 'flex',
	alignItems: 'center',
	height: '3rem',
	padding: '0 1rem',
	justifyContent: 'space-between',
	margin: '0.5rem',
};

const input = {
	width: '70%',
	border: 'none',
};
