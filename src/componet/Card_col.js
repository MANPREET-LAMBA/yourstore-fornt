import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function Card_col({name,productprice,url,id})
{
    const user = window.localStorage.getItem("username");
  
    const cartHandler = async()=>{
        const result = await axios.post("http://localhost:3000/api/carthandler",{id,user })
        console.log(result);
        toast("Added successfully")        
    }
    const navigate = useNavigate();
    return(
        <div className=" w-auto h-auto justify-center p-3 border-2 rounded-md  border-thirdDGreen ">
            <div className="flex  justify-center overflow-hidden  items-center" ><img className="w-36 h-44 " src={url}/></div>
            <div className="flex flex-col items-center">
                <h1 className="font-serif text-lg">{name}</h1>
                <h3 className=" text-base">{productprice}</h3>
            </div>
            <div className="flex flex-col gap-2 font-serif text-base items-center">
                <button onClick={ ()=>{
                    if(window.localStorage.getItem("IsLoggin")){ navigate(`/product?name=${name}&id=${id}`)}else{ toast("please login first")} }}
                     className="border-2 w-40 rounded-md hover:bg-fourthLGreen hover:text-firstWhite border-thirdDGreen">View</button>
                
                <button onClick={()=>{ if(window.localStorage.getItem("IsLoggin")){cartHandler(); toast("Add to cart successfully")}else{ toast("please login first")}}} className="border-2 w-40 rounded-md  hover:bg-fourthLGreen hover:text-firstWhite border-thirdDGreen">Add to cart</button>
            </div>

        </div>
    )
}



