import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../Style/Login.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/signup/actions";

export const Login = () => {
    const [matter, setMatter] = useState([]);
    const [data, setData] = useState({
        email:"",
        password:"",
    })

    const dispatch = useDispatch();

    const srini = useSelector(store => store.todo );
    console.log(" Login " + srini);

    const {email,password} = data;

    useEffect(() => {
        getData();
    },[])

  

    const getData = () => {
        axios.get("https://flatheads1.herokuapp.com/details")
        .then((res) => setMatter(res.json()))
        .then((res) => dispatch(addTodo(res.data)));
    }

    console.log(" +++ " +  matter);

    const handleChange = e => {
        setData({...data,[e.target.name]:e.target.value});
    }

    const handleSubmit = e => {

        e.preventDefault();
        if(result.length > 0){
            window.location.href = "/";
            // getData();
        }else{
            alert("wrong credintials");
        }
    }
    
    let result = matter.filter((user) => user.email === email && user.password === password);
    console.log("Result "+result);
    console.log("Matter "+matter);


    return (
        <div id="main">
            <div id="img">
            <h1>login</h1>
                <form onSubmit={handleSubmit} autoComplete="off">
                   
                    <input type="email" placeholder="Enter your email" name="email" value={email} onChange={handleChange} style={{height:"30px",width:"80%"}} />
                    <br />
                    <br />
                    <input type="password" placeholder="Enter your password" name="password" value={password} onChange={handleChange} style={{height:"30px",width:"80%"}} />
                    <br />
                    <br />
                    <button type="submit" style={{height:"30px",width:"80%"}} ><Link to="/" className="link"> <span style={{color:"#0095f6",fontWeight:"600"}}> Login</span> </Link></button>
                   
                </form>
                <p>If your new user then click here <Link style={{textDecoration:"none", color:"blue"}} to="/signup">Signup</Link></p>
            </div>
        </div>
    )
}