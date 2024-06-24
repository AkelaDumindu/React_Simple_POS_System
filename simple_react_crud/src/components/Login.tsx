import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Login:React.FC= ()=> {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = ()=>{
        console.log(email);
        console.log(password);
        
        
    }

    return(
        <>
        <br />
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input onChange={(e)=>{
                            setEmail(e.target.value)
                        }} type="email" className="form-control" placeholder="email here" />
                    </div>
                </div>
                <div className="col-6">
                <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input onChange={(e)=>{
                            setPassword(e.target.value)
                        }} type="password" className="form-control" placeholder="password here" />
                    </div>  
                </div>
                <div className="col-12">
                    <br />
                    <button onClick={(e)=>{
                        login();
                    }} className="btn btn-primary col-12">Login</button>

                    <br /><br />

                    <Link to="/Signup" className="btn btn-outline-dark col-12">Sign up</Link>
                </div>
            </div>
        </div>
        </>
    )
}
export default Login;