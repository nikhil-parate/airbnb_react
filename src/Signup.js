import React,{useState} from 'react'
//import {Button} from "@material-ui/core";
import './Signup.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const API_URL1 = 'https://airbnbnode.herokuapp.com/register';
toast.configure();
const SignupForm = () =>{
    const [values, setValues] =  useState({
        fullname:"",
        email:"",
        phone:91,
        password:""
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            axios(API_URL1, { 
                method: 'POST',
                url: API_URL1,
                data : {
                  name: values.fullname,
                  email: values.email,
                  phone: values.phone,
                  password: values.password
              }
              })
              .then((response)=>{
                if(!response.data.error) {
                  console.log(response.data.error)
                   toast.success('Successfully Registered.', {position: toast.POSITION.TOP_CENTER});
                }
                else{
                  toast.error(response.data.error);
                  console.log(response.data.error, {position: toast.POSITION.TOP_CENTER});
              }
              })   
        } catch (err) {
            console.log(err);
        }
    }

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name] : event.target.value,
        })
    }
    return (
        <>
     <div className="container">
      <div className="app-wrapper">
          <div>
              <h2 className="title">Create Account</h2>
          </div>
          <form className="form-wrapper">
          <div className="name">
              <label className="label">Full Name</label>
              <input className="input" type="text" name="fullname" value={values.fullname} onChange={handleChange}></input>
          </div>

          <div className="email">
              <label className="label">Email</label>
              <input className="input" type="email" name="email" value={values.email} onChange={handleChange}></input>
          </div>

          <div className="phone">
              <label className="label">Phone</label>
              <input className="input" type="number" name="phone" value={values.phone} onChange={handleChange}></input>
          </div>

          <div className="password">
              <label className="label">Password</label>
              <input className="input" type="password" name="password" value={values.password} onChange={handleChange}></input>
          </div>
          
          <div >
              <button className="submit" onClick={handleSubmit}>Sign Up</button>
          </div>
          </form>
        </div>
     </div>
     </>
    )
}

export default SignupForm
