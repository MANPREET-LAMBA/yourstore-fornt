
import { useContext, useState } from "react";
import axios from "axios";
import {  toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import {UseContext} from "../App"

export function Login() {
 
    const [username, userNameHandler] = useState("");
    const [password, passwordhandler] = useState("");
    const navigate = useNavigate();
    const {islogin, isloginhandler}= useContext(UseContext);

    const loginFormHandler = async (e) => {
        e.preventDefault()

        try {
            const result = await axios.post('http://localhost:3000/api/login', { username, password })
            console.log(result)
            console.log("jhafdfsdahj")
            if(result.data == false){ toast("Login Fail")}
            else{if(await result.data.user.login == true) {
                window.localStorage.setItem("IsLoggin", true);
                window.localStorage.setItem("Tokken", result.data.user.token);
                window.localStorage.setItem("username", result.data.user.username);
                isloginhandler(true);
                toast("login successfull")
               
            }}
        } catch (error) {
            toast("Login Fail")
            console.log(error)
        }


        navigate("/")
        

    }



    return (
        <div className="w-5/6 h-auto p-10 rounded-xl text-black bg-black/25">
            <form className="flex flex-col gap-3">
                <label>
                    <input onChange={(e) => { userNameHandler(e.target.value) }} className="w-full h-8 border-2 rounded-sm font-serif" placeholder="Username"></input>
                </label>
                <label>
                    <input onChange={(e) => { passwordhandler(e.target.value) }} className="w-full h-8 border-2 rounded-sm  font-serif" placeholder="Passward"></input>
                </label>
                <button className="  text-firstWhite font-serif border-2 rounded-sm mt-5 border-firstWhite" onClick={loginFormHandler} type="submit">Login</button>
            </form>

        </div>
    )
}