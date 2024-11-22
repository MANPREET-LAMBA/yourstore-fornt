import { useContext, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
import {UseContext} from "../App"

export function Signup() {
    const navigate = useNavigate();
    const {islogin, isloginhandler}= useContext(UseContext);
    const formhandler = async(event) => {
        console.log("sdnwaejnfkqr")
        event.preventDefault();
        

        try {
          const result=  await axios.post('http://localhost:3000/api/sign_up', { name , username, mobile_no, email,hashpass })
       
             if(result.data.succes == false){toast("sign-up fail")}
            else{
                if(result.data.succes == true){
                    window.localStorage.setItem("IsLoggin", result.data.succes);
                    window.localStorage.setItem("username", result.data.username);
                    window.localStorage.setItem("Tokken", result.data.tokken);
                    isloginhandler(true);
                    console.log("islogin");
                    
                    toast("sign-up sucessfully")
                }
            }
        } catch (error) {
            toast("sign-up fail")
            console.log(error)
        }

        navigate("/");
    }
  

    const [name, namehandler] = useState();
    const [username, usernamehandler] = useState();
    const [mobile_no, mobilehandler] = useState();
    const [email, emailhandler] = useState();
    const [hashpass, passwordhandler] = useState();


    return (
        <div className="w-auto h-auto  flex flex-col items-center  p-10 md:w-[500px] bg-black/25 rounded-xl">
            <form className="flex w-auto flex-col items-center  md:flex-row md:justify-between text-black md:flex-wrap gap-3">
                <label ><input onChange={(e) => { namehandler(e.target.value) }} className="w-48 h-10 border-2 px-1 font-serif text-black " placeholder="Name" /></label>
                <label ><input onChange={(e) => { usernamehandler(e.target.value) }} className="w-48 h-10 border-2 px-1 font-serif text-black " placeholder="Username" /></label>
                <label ><input onChange={(e) => { mobilehandler(e.target.value) }} className="w-48 h-10 border-2 px-1 font-serif text-black " placeholder="Mobile number" /></label>
                <label ><input onChange={(e) => { emailhandler(e.target.value) }} className="w-48 h-10 border-2 px-1 font-serif text-black " placeholder="Email" /></label>
                <label ><input onChange={(e) => { passwordhandler(e.target.value) }} className="w-48 h-10 border-2 px-1 font-serif text-black " type="password" placeholder="passw0rd" /></label>
                

            </form>
            <button className="font-serif p-1 px-6 mt-5 border-2 border-firstWhite" onClick={formhandler} type="submit">Sign Up</button>
        </div>
    )
}