import { useEffect } from "react";
import { useNavigate } from "react-router-dom"


export function Logoutcheck()
{
   const navigate = useNavigate();
 useEffect(()=>{  navigate("/");},[])
 
}

