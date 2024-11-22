import { useState } from "react"
import { Login } from "./Login";
import { Signup } from "./Signup";
import { Link } from "react-router-dom";
import Element3D from "./Element3D";
import "./landing.css";

export function Auth() {
    const [show, showhandler] = useState(true);
    const authhandler = (data) => {
        if (data === "ture") {
            showhandler(data)
        }
        if (data === "false") {
            showhandler(data)
        }

    }
    return (
        <div className="w-full h-auto md:h-full ">


            <div className=" flex-col md:flex md:flex-row text-firstWhite md:justify-center  bg-secondDGray">
                
                <div className="w-full h-screen pt-6 mb-4 md:w-1/3 md:mt-0 md:mb-0 md:h-screen flex justify-center items-center md:pt-14">
                    <div className="w-auto px-6 h-auto py-[45px]  rounded-2xl bg-fourthLGreen/80 pt-4 flex flex-col content-center ">

                        <div className="flex gap-16 text-firstWhite justify-center pt-6 font-sans font-semibold text-xl ">
                            <div onClick={() => { showhandler(true) }}>Login</div>
                            <div onClick={() => { showhandler(false) }}>Sign Up</div>
                        </div>
                        <div className=" flex justify-center pt-8 ">
                            {
                                show ? (<Login />) : (<Signup />)
                            }
                        </div>
                        <div className="flex items-center m-2">
                            <div className="w-2/4 h-[2px] bg-firstWhite"></div>
                            <div className="px-1">OR</div>
                            <div className="w-2/4 h-[2px] bg-firstWhite"></div>
                        </div>
                        <button className="">Continue with Goole</button>
                    </div>
                </div>
            </div>
        </div>
    )
}