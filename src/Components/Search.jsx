import React from 'react'

import { useSelector } from 'react-redux';

export const Search = () => {
	const data = useSelector((state) => state.data);
	console.log(data);

  return(
	<div>
	
	</div>
   )
  }
