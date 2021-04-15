import React from 'react';

const GifGridItems = ({id,title,url})=>{

	return(
		<div className="card animate__animated animate__fadeIn">
			<p><img src={url} alt={title}></img></p>
			<p>{title}</p>
		</div>
	)
}


export default GifGridItems