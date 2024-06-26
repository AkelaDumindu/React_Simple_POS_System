import React, { useState } from "react";
import AxiosInstance  from '../config/axiosInstance';
import { Link } from "react-router-dom";

const Login:React.FC= ()=> {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signup = async ()=>{
        try {
            const response = await AxiosInstance.post('/users/register', {
                fullName, email, password
            });
    
            console.log(response);
            setFullName('');
            setEmail('');
            setPassword('');
            
        } catch (error) {
            console.log(error);
            
            
        }

        
        
    }

    return(
        <>
        <br />
        <div className="container">
            <div className="row">

            <div className="col-4">
                    <div className="form-group">
                        <label htmlFor="email">Full Name</label>
                        <input onChange={(e)=>{
                            setFullName(e.target.value)
                        }} type="email" className="form-control" placeholder="full name here" />
                    </div>
                </div>

                <div className="col-4">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input onChange={(e)=>{
                            setEmail(e.target.value)
                        }} type="email" className="form-control" placeholder="email here" />
                    </div>
                </div>

                <div className="col-4">
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
                        signup();
                    }} className="btn btn-primary col-12">Signup</button>

                    <br /><br />

                    <Link to="/Login" className="btn btn-outline-dark col-12">Already have an account</Link>
                </div>
            </div>
        </div>
        </>
    )
}
export default Login;