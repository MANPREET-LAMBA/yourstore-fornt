import { useState } from "react"
import {  toast } from 'react-toastify';
import axios, { Axios } from "axios";

export function Datapost()
{
    const [productname , namehandler]= useState("");
    const [dircription , discriptionhandler]= useState("");
    const [price , pricehandler]= useState("");
    const [category , categoryhandler]= useState("");
    const [file , filehandler]= useState(null); 
    const formhandler = async(e)=>{
        e.preventDefault();
      
        const formData = new FormData();

        // Append other form fields to the FormData
        formData.append('productname', productname);
        formData.append('dircription', dircription);
        formData.append('price', price);
        formData.append('category', category);
        formData.append('file', file);
        
        try {
            console.log("data");
            
            const result = await axios.post("http://localhost:3000/api/product_add_db" ,formData,{
                headers: {
                  'Content-Type': 'multipart/form-data'
                }})
                console.log(result.data.success);
                
                if(result.data.success == true){
                     toast("Post successfull")
                }else{
                    toast("Post unsuccessfull")
   
                }
                

            }

         catch (error) {
            console.log("error in posting product data")
            // console.log(error) {productname,dircription,price,category,file}
        }
    }   


   

    return(
       <div className="h-screen overflow-hidden text-firstWhite bg-secondDGray pt-20">
        <div className="font-serif font-bold text-3xl text-center text-firstWhite pt-10"><h1>Add Product to your Store</h1></div>
         <div className="w-screen h-auto flex justify-center pt-14  ">
           <div className="w-auto  p-6 rounded-md bg-thirdDGreen">
           <div className="flex  flex-col max-h-max content-center p-10 rounded-md bg-secondDGray/65 " >
                <form  onSubmit={formhandler} action="/upload" method="post" className=" text-black flex flex-col gap-5 content-center" enctype="multipart/form-data">
                    <input className="border rounded-md h-9 w-72 p-3 border-gray-950/90" onChange={(e)=>{namehandler(e.target.value)}} placeholder="Product Name" />
                    <input  className="border rounded-md h-9 w-72 p-3 border-gray-950" onChange={(e)=>{discriptionhandler(e.target.value)}}   placeholder="Discription" />
                    <input  className="border rounded-md h-9 w-72 p-3 border-gray-950"  onChange={(e)=>{pricehandler(e.target.value)}} placeholder="Price" />
                  
                        <select  className="border rounded-md h-9 w-72  border-gray-950" onChange={(e)=>{categoryhandler(e.target.value)}} name='Category' >
                            <option value="#">Tag </option>
                            <option value="suit">SUIT</option>
                            <option value="kuriti">KURITI</option>
                            <option value="bedsheet">BEDSHEET</option>
                        </select>
                        <input  onChange={(e)=>{ filehandler(e.target.files[0])}}  name="file" className="  text-firstWhite w-[220px]" type="file" placeholder="image"  />
                        {/* <div className=" flex justify-center " > <input  onChange={(e)=>{ filehandler(e.target.files)}}  name="pic" className=" w-[220px]" type="file" placeholder="image" multiple /></div> */}
                    <button  className="border rounded-md h-9 w-72  text-firstWhite border-firstWhite font-serif font-bold text-" type="submit">Post</button>
                </form>
            </div>
           </div>
        </div>
       </div>
    )
}