import React, { useState } from 'react';
import PropTypes from 'prop-types'

export const CategoryAdd = ({setCategories})=>{
const[inputValue, SetInputValue] = useState('')

const handleInputChange =(e)=>{
	SetInputValue(e.target.value)
}

const handleSubmit = (e)=>{
	e.preventDefault()

	if(inputValue.trim().length > 2){
		setCategories(categories => [inputValue,...categories])
	SetInputValue('')
	}
}

	return(
		<div>
			<h2>Add Category</h2>
			<form onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='Añadir Categoria'
				value={inputValue}
				onChange={handleInputChange}
			 />
			<button
			disabled={inputValue===0}>
				Añadir Categoria</button>
			</form>
		</div>
	
	)
}


CategoryAdd.propTypes = {
	setCategories: PropTypes.func.isRequired
}