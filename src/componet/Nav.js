import { useContext, useEffect,  useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {UseContext} from "../App"


export function Nav() {
    const {islogin, isloginhandler} = useContext(UseContext);
 
    const navigate = useNavigate();

    const logouthandler = () => {
       
        window.localStorage.setItem("Tokken", null);
        window.localStorage.setItem("username", null);
        window.localStorage.setItem("IsLoggin", false);
        window.localStorage.clear();
      isloginhandler(false)
        
    }
   useEffect(()=>{
    
    
    if( window.localStorage.getItem("IsLoggin"))
    {
       
        isloginhandler(true);
     
    }
   
   },[]);


    const [show, showhandler] = useState(false);
    const [loginshow, loginhandler] = useState(false);

    const log_handler = () => {
        if (loginshow == false) {
            loginhandler(true)
        }
        if (loginshow == true) {
            loginhandler(false)
        }
       

    }

    //small screen to show navbar
    function nav_handler() {
        console.log("hello")
        if (show === false) {
            showhandler(true);
        } if (show === true) {

            showhandler(false);
        }
    }

    return (
        <div>
            <div className="bg-fourthLGreen/90 flex text-firstWhite fixed w-full  justify-between text-2xl  h-20  z-[999]   ">
                <div className="col-span-1 content-center flex items-center font-serif uppercase font-bold mx-5 md:w-2/12">
                    <div onClick={nav_handler} className=" md:hidden" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>
                    </div>
                    <div className="px-4">your <br></br>store</div>
                </div>
                <div className={`col-span-4 w-auto px-7 h-auto text-xl mt-20 flex flex-col bg-slate-600 bg-opacity-60 -z-[999] duration-100 -mx-[100%] absolute ${show ? "mx-[0%]" : null}   md:bg-transparent md:bg-opacity-0 md:flex-row md:w-8/12 md:h-20  md:justify-center items-center font-mono w-full  p-3   md:my-0 md:static md:z-0 md:gap-14 md:px-8 md:col-span-5  `}>
                    <Link onClick={nav_handler} to="/"><div >Home</div></Link>
                    <Link onClick={nav_handler} to="/suit"><div>Suit</div></Link>
                    <Link onClick={nav_handler} to="/kurties"> <div>Kurties</div></Link>
                    <Link onClick={nav_handler} to="/bedsheets"> <div>Bedsheets</div></Link>
                    <div>About Us</div>
                </div>
                <div className=" col-span-2 flex justify-end md:w-2/12 h-20 mx-5 items-center md:col-span-1" >
                    {islogin && <svg onClick={() => { navigate('/cart') }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    }



                    {!islogin ? <Link to="/login"><div onClick={() => { log_handler() }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </div></Link> : null}

                    {islogin ? <button onClick={logouthandler} className='w-fit h-auto px-3 text-lg border-2 rounded-sm  border-firstWhite py-1 hover:text-thirdDGreen hover:bg-firstWhite '>Log out</button> : null}


                </div>
            </div>
        </div>
    )
}