import React, {useRef, useState} from 'react'
import { BsFillEyeFill } from "react-icons/bs";
import axios from 'axios'
import  logotheme  from '../components/images/logotheme.jpeg'
import { useNavigate } from 'react-router-dom';



const ResetPassword = () => {
    
    let navigate = useNavigate();
   let password =useRef();
   let confirmpassword=useRef();
   let [err,setErr]=useState(null)

    let handleconfirm=(e)=>{
        e.preventDefault();

        let confi={headers :
             { password: password.current.value,
            confirm: confirmpassword.current.value
        }}
        
        axios.get("http://localhost:9091/resetPwswd",confi)
        .then((res)=>{console.log(res.data)

            navigate("/")})
        .catch((res)=>{let err=res.response.data; setErr(err); console.log(res.response.data);})        
    
        
    }
   
     

    return (
        <div>

            <section>
                <div className="form-box">
                    <div className="form-value">
                        <div className='images'>
                            <img src={logotheme} />
                        </div>
                        <form onSubmit={handleconfirm} >
                            <h2>ResetPassword</h2>

                         
                            <div className="inputbox">

                            
                                <ion-icon name="lock-closed-outline"><BsFillEyeFill /> </ion-icon>
                                <label>New Password </label>
                                <input type="password" required ref={password} />

                               
                                
                            </div>
                            

                            <div className="inputbox">
                                <ion-icon name="lock-closed-outline"><BsFillEyeFill /></ion-icon>
                                <input type="password" required ref={confirmpassword}  />
                                <label>Confirm-Password</label>
                            </div>


                            <div className="err">
                            {err!==null && <h4>{err}</h4>}
                            </div>

                            <button>Reset Password</button>
                            



                        </form>
                     

                    </div>
                </div>

            </section>

        </div>
    );
}

export default ResetPassword;