import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Style/SignUp.css";
import {isLoading,isSignup,isError} from "../redux/signup/actions";
import {  Navigate } from "react-router-dom";


function SignUpForm(){
    let [formData,setFormData] = useState({});
    const { isloading, signup, iserror } = useSelector((state)=>({
        isloading: state.signup.isloading,
        signup: state.signup.signup,
        iserror: state.signup.iserror
    }));
    const dispatch = useDispatch();
    const handlechange = (e)=>{
        const {name,value} = e.target;

        formData[name] = value;
        setFormData({...formData});
        console.log(formData)

    }
    

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("aaaaaa")
        dispatch(isLoading());
        console.log(isloading);
        fetch("https://instagram-backend-dipu1-app.herokuapp.com/signup",{
            
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
                
                
            }
        })
        .then(res => res.json())
        .then(data =>{
            
            if(data.status==="failed"){
                dispatch(isError(true));
                console.log("d",data);
            }else{
                 dispatch(isSignup(true));
                
                
            }
        })
        .catch(()=>{
            dispatch(isError(true));
        })

    }
    if(signup){
        return < Navigate to={"/"} />;
    }
    return (
       <div>
            <h1>Create a new account</h1>
           <div className="signup-box">
        
          
            <div className="or">
             
                <div>
                   
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                
                <input type="text" name="full_name" placeholder="First Name" onChange={handlechange}/>
                <input type="text" name="full_name" placeholder="Last Name" onChange={handlechange}/>
                <input type="text" name="email" placeholder="Email"onChange={handlechange} />
                <input type="password" name="password" placeholder="Password" onChange={handlechange}/>
                  
                <input type="submit" value={isloading?"loading...":"Sign Up"}  ></input>
            </form>
              
               
            <div>
                    <p>OR</p>
                </div>
                <hr />
                
                <br/>
            <div>
          
          <button>Sign Up with Google</button>
          </div>
            {iserror?<p>email or phone already esits</p>:null}
            
            <p>By signing up, you agree to our Terms , Data Policy and Cookies Policy .</p>
        </div>
       </div>
        
    )
}

export default SignUpForm;