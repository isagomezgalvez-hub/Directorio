import React, { useState } from 'react';
import { CategoryAdd } from './components/CategoryAdd';
import GridList from './components/GitList';


const GitExpertApp = () => {

	const [categories, setCategories] = useState(['Cats']);


	return (
		<div>
			<h2>Git Expert App</h2>
			<hr />
			<CategoryAdd setCategories={setCategories} />
		
			<ol>
				{categories.map((category) => 
					<GridList 
					category={category} 
					key={category}
					/>
				)}
			
			</ol>
		</div>
	)
}
/// GitExpertApp

export default GitExpertApp