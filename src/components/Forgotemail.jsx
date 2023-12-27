import React, { useRef, useState } from 'react'
import  logotheme  from '../components/images/logotheme.jpeg'

import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { BsFillEnvelopeFill } from "react-icons/bs";

const Frogotemail = () => {

    let navigate = useNavigate();
    let email = useRef();
    let [userdata, setUserdata] = useState(null)
    let [err,setErr]=useState(null)


    let handledata = (e) => {

        e.preventDefault();
        let header={headers:{email:email.current.value}}

        axios.get("http://localhost:7071/mcheckemail",header)   
           .then((response)=>{console.log(response.data); navigate("/resetpassword")})
         .catch((res)=>{let err=res.response.data; setErr(err);console.log(res.response.data);})
            }

    return (
        
        
        <div>


            <section>
                
                <div className="form-box">

                    <div className="form-value">
                        <div className='images'>
                            <img src={logotheme}  /> 

                        </div>
                        <form onSubmit={handledata} >
                            <h2>Forgotpassword?</h2>
                            <div className="inputbox">


                                <input type="email" required ref={email} />
                                <label >Email</label>
                                <p><BsFillEnvelopeFill /></p>
                            </div>
                            <div className="err">
                            {err!==null && <h4>{err}</h4>}
                            </div>
                            <a ><button>Submit</button></a>
                            <div className="register">
                                <p> Have an account??? <a>GoBack</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>



        </div>
          );
}

export default Frogotemail;

