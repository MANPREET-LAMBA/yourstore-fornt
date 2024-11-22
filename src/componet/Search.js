import axios, { Axios } from "axios";
import { Nav } from "./Nav";
import { Card_col } from "./Card_col";
import { useEffect, useState } from "react";
import { Loader } from "./Loader";

export  function Search(props){
const data = props.searchiteam;
console.log(data);
const [arry,arrset]= useState([]);
    


useEffect(()=>{

    const getdata = async()=>{
        let response =  await axios.get("http://localhost:3000/api/searchquery?category=" +data)
        arrset(response.data);
    }
   
    getdata();
},[data])





    
    return(
        <div>
           
            
               <div className="flex flex-wrap gap-3 justify-evenly py-[90px]">
                    {
                        arry.map((product)=>{
                          console.log(product);
                          
                           if(product !== null){
                            const{productname,price,image,id} = product;
                          
                            return(<Card_col name={productname} productPrice= {price} url= {image}  id={id}/>)
                           }
                            
                        })
                    }
                    </div>
            
           
        </div>
    )
} 