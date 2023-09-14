import React from "react";
import { Link } from "react-router-dom";

const Home = () =>{
    return(
        <div className="home">
            <h1>E-Prathibha Learning </h1>
            <br/>
            <h4>NOTE <span>*</span></h4>
            <p>If you are a new user create a new account by clicking on the register</p>
            <p>Already existing user. Click the login  </p>   
      <button  className="btn btn-primary hr">
      <Link to="/register" className="remove">Register</Link>
        </button>
      <br/>
      <br/>
      <button  className="btn btn-primary hl">
        <Link to="/login" className="remove">Login</Link>
        </button>
    

        </div>
    );
}
export default Home;