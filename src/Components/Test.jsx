import { useEffect, useState } from "react";

export const Check = () =>{
    const [todos,setTodos] = useState([]);
 
    const [page,setPage] = useState(1)
    useEffect(()=>{
        getData()
      },[page])

      const getData = () =>{
       
        fetch(`http://localhost:3001/shoes?_page=${page}&_limit=50`).then(d=>d.json()).then(res=>{
            setTodos(res)
        
        })
    }



    return <div>
        <h1>hie</h1>
        {todos.map(e => <div key={e.id}>{e.title}
        {e.cost}
        <img src={e.image}/>

        <hr />
 </div>
       )} 

    </div>
}