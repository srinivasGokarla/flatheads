import axios from "axios";
import React from "react";
import { useEffect } from "react";
import {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addTodo } from "../redux/signup/actions";
import "../Style/SignUp.css";

export const Signup = () => {
    const dispatch = useDispatch();

    const manju = useSelector(store => store.todo);
    console.log(" SignUp "+manju);

    const [data, setData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirmPassword:"",
        status:false,
    })

    const {firstname,lastname,email,password,confirmPassword} = data;

    useEffect(() => {
        // console.log("Last", manju)
        getTodo();
    },[])

    const handleChange = e => {
        setData({...data,[e.target.name]:e.target.value});
    }

    const getTodo = () => {
        axios.get("https://flatheads1.herokuapp.com/details").then((res) => { dispatch(addTodo(res.data)) }).then(() => {console.log("Posted")})
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(password !== confirmPassword){
            alert("password doesn't match");
        }else{
            // axios.post("https://flatheads1.herokuapp.com/details",data).then(() => getTodo())
            console.log(data);
            window.location.href="/login";
            postData();
        }
    }

    const postData = () => {
        console.log("Data : ", data)
        axios.post("https://flatheads1.herokuapp.com/details",data).then(() => getTodo())
    }

    return (
      
        <div id="main">
              <h1>Create a new account</h1>
            <div id="img">
               
               
                <form onSubmit={handleSubmit} autoComplete="off">
                 
                    <input type="text" name="firstname" value={firstname} placeholder="Enter your first name" onChange={handleChange} style={{height:"30px",width:"80%"}} />
                    <br />
                    <br />
                    <input type="text" name="lastname" value={lastname} placeholder="Enter your last name" onChange={handleChange} style={{height:"30px",width:"80%"}} />
                    <br />
                    <br />
                    <input type="email" name="email" value={email} placeholder="Enter your email" onChange={handleChange} style={{height:"30px",width:"80%"}} />
                    <br />
                    <br />
                    <input type="password" name="password" value={password} placeholder="Enter your password" onChange={handleChange} style={{height:"30px",width:"80%"}} />
                    <br />
                    <br />
                    <input type="password" name="confirmPassword" value={confirmPassword} placeholder="Enter the confirmed password" onChange={handleChange} style={{height:"30px",width:"80%"}} />
                    <br />
                    <br />
                    <input type="submit" style={{height:"30px",width:"80%", backgroundColor:"black",color:"white"}} SignUp/>
                </form>
            </div>
        </div>
    )
}