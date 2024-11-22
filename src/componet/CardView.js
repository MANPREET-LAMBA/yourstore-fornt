import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Loader } from "./Loader";
import { Cardshow } from "./Cardshow";

export function Cardview()
{
    const [loading,loadinghandler] = useState(true);
    
const [id,idSet] = useSearchParams();
const data = id.get("id");
const [carddata , carddatahandler] = useState();
    useEffect(()=>{

        const getdata = async()=>{
            let response =  await axios.get("http://localhost:3000/api/searchone?id=" +data)
            
            console.log(response)
            await carddatahandler(response.data)
           
         loadinghandler(false)
        }
       
        getdata();
    },[data])




   return(
        <div className="w-full h-auto pt-20 ">
         
        {  loading?<Loader/>:<Cardshow productname={carddata.productname} image={carddata.image} price={carddata.price} discription={carddata.dircription}/>}
        </div>
      
    );
}