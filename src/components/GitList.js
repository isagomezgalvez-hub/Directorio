import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItems from './GifGridItems'

const GridList = ({category})=>{
	const { data, loading } = useFetchGifs(category);

	return(
		<div>
			<h3>{category}</h3>
	
		<div className="card-grid">
			
				{loading && <p className="animate__animated animate__flash">Loading</p>}
		
			{
				data.map( (img) =>(
					<GifGridItems 
					key={img.id}
					{...img}/>
				))
			}
	
		</div>
		</div>
	)
}

export default GridList