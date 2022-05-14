import { useState, useEffect } from 'react';
import React from 'react';
import '../Style/product.css';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { storeData } from '../redux/storeData/action';
import Box from '@mui/material/Box';
import { Pagination } from '@mui/material';

// import {useNavigate,useParams} from 'react-router';
import {Button ,ButtonGroup} from '@mui/material'
import {addCart} from '../redux/Cart/action'




const ProductPage = () => {
  // const [data, setData] = useState([]);

  const [search,setSearch] = useState("")
  const [value,setValue] = useState([])
	//console.log(search)
  const [val,setVal] = useState("")
// const params = useParams()
// const navigate = useNavigate()

  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const fetchData = async () => {
    return axios({
      url: `http://localhost:3004/shoes?_page=${page}&_limit=14`,
      method: 'GET',
      params: {},
    })
      .then((response) => {
        // const data =(response.data)

        console.log(response.data)
      dispatch(storeData(response.data));
      })

      .catch((error) => {});
  };

  useEffect(() => {
    fetchData();
  }, [page]);




  const data = useSelector((state) => state.Data.data);
  console.log(data)
  const CartData = useSelector((state) => state.Cart.cart);
  console.log(CartData);


  const Send = (e) => {
   // console.log(e)
  dispatch(addCart(e))
  
  }
  const sortBylow =(m) => {
    if(m === "l") {
      let res = data.sort((a,b) => a.cost - b.cost)
     setValue([...res])
     //console.log(res)
    } else if ( m === "h" ) {
      let res = data.sort((a,b) => b.cost - a.cost)
      setValue([...res])
      //console.log(res)
    }
    
    }

  
  return (
    <div>
  <div>
       <input type="text"placeholder="What are you loooking for" className="search" onChange={(e) => setSearch(e.target.value)} />
        </div>

    
      
{/* 
        <div>
          products is {params.id}
        </div> */}


       
  
      

    <div className="flex">
       <div >
       <Box
      sx={{
        display: 'flex',
       
        '& > *': {
          m: 2,
        },
      }}
 >
     
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="contained"
    
      >
   <div className=""> 
  <Button className="mt-8 w-32 " onClick= {() => {sortBylow("l")}}>Less price</Button>
  </div>
  <div className="mt-5  bg-black-600">
  <Button className="mt-8 w-32  " onClick= {() => {sortBylow("h")}}>high price</Button>
  </div>
      </ButtonGroup>
  
    </Box>
       </div>
      
      <div className="container " >
    
   
        {data
        .filter((el) => {
          
          if(el.title === val){
            return el.title === val
          }else if(val === ""){
              return el
          }
       })
        .filter((a) => {
          if(search === ""){
            return a
          }else{
            return a.title.toLowerCase().includes(search.toLowerCase())  || a.madeBy.toLowerCase().includes(search.toLowerCase())  
          }
          
        })
        
        
        .map((a) => {
          return (
            <>
              <div className="borde w-80 " key={a.id}>
                <div className="h-full ">
                  <div >
                    <img src={a.image} alt="" id="img" />
                  </div>
                  <div className="b  w-2/5 text-white margin-auto">
                    <div>
                      <button className="bg-blue-500 shadow-lg rounded-2xl p-2 hover:bg-black-600 shadow-blue-500/50  " onClick={() => {Send(a)}} >
                        Add to cart
                      </button>
                    </div>
          
                  </div>
                  
                  <div className=" mt-1 mb-2  ">
                   
                      <div className="text-md font-semi-bold borde w-72 ">
                        {a.title}
                      </div>

                   
                    <div className="  ">
                     <div className="flex w-48">
                     
                      <div className="text-blue-400 font-bold ">
                        <p>₹ {a.cost}</p>
                      </div>
                      
                     </div>
                     
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      </div>

      <Box py={4} display="flex" justifyContent="center">
        <Pagination
          count={10}
          color="secondary"
          variant="outlined"
          onChange={(e, value) => setPage(value)}
        />
      </Box>

    </div>
  );
};

export { ProductPage};
