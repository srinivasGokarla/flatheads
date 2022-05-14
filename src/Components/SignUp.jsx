import "../Style/SignUp.css";
import SignUpForm from "./SignUpForm";
import { Link } from "react-router-dom";

function SignUp(){
    return (
        
        <div className="signup-div" >
            <SignUpForm />
            <div className="signup">
                   Have an account? <Link to="/" className="link"> <span style={{color:"#0095f6",fontWeight:"600"}}> Sign in</span> </Link>

                </div>
                Get the app.
                <div className="app-store">
                   
                  

                </div>

        </div>
        
    )
}

export default SignUp;