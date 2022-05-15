import React from 'react'
import {useSelector} from 'react-redux'
import  {Signup} from'./SignUp'
export const Cart = () => {
  const data1 = useSelector((state) => state.Cart);
  console.log(data1);

  return(
	<div>
    <div className=" ">
  < Signup />
    </div>
  </div>
   )
  }
