import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";


export const Cartshow = () => {
    const user = window.localStorage.getItem("username")
    const [result, resulthandler] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        const getdata = async () => {
            const response = await axios.post("http://localhost:3000/api/fetchCardData", { user });
           resulthandler(response.data);
            
            
        }

        getdata();
    }, [])


   
    return (
        <div>
            {
                result.map((e)=>{
                    const discription = e.dircription
                    const disc = discription.slice(0,50);
                   
                    
                    return(<div className="w-full h-auto flex border-2 border-thirdDGreen rounded-md mb-2  ">
                        <div className=" p-2"><img  onClick={()=>{navigate(`/product?name=${e.productname}&id=${e.id}`)}} className="w-36 h-44" src={e.image}/></div>
                         <div className=" px-3 w-ful">
                             <h1 className="font-serif text-2xl">{e.productname}</h1>
                             <h1 className="font-serif text-xl">{e.price}</h1>
                             <button className="border-2 w-40 rounded-md  hover:bg-fourthLGreen hover:text-firstWhite border-thirdDGreen">Buy now</button>
                             <p>{disc}....</p>
                         </div>
                         <div> </div>
                     </div>)
                })
            }
        </div>
    )
}