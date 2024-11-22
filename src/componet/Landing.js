import "./landing.css";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {ScrollTrigger} from "gsap/all"

export default function Landing()
{

    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {

       let x= document.querySelectorAll(".elm");
       let elm2= document.querySelectorAll(".elm2");

       gsap.from(elm2,{
        scale:0,
        delay:0.5,
        duration:1.5,
       })
       
       x.forEach((elm) => {
            let imgs= elm.querySelector("img ");
           
            let t= gsap.timeline();
            
            let xtransform = gsap.utils.random(-100,100);

            t
            
                .set(imgs,{
                    transformOrigin:`${xtransform<0?0:'100%'}`,
                },"start")
                .to(imgs,{
                    scale:0,
                    ease:"none",
                  
                    scrollTrigger:{
                        trigger:imgs,
                        start:"top 15%",
                        end: "bottom top",
                        scrub: 2,                    
                    }
                },"start")

               
        })

        
            
        }
    );
    return(
        <div className="w-full relative -z-50 ">
           <div className="bg-first w-full pt-20 ">
            <div className="grid grid-cols-8 grid-rows-2 ">
                <div className="elm gap-3 w-28 h-44 md:w-40 md:h-60 col-span-1 row-span-1" style={{"--r":1,"--c":2}}><img src="./photo/1.jpg " alt="1"></img></div>
                <div className="elm gap-3 w-28 h-44 md:w-40 md:h-60 col-span-1 row-span-1" style={{"--r":1,"--c":6}}><img src="./photo/2.jpg" alt="2"></img></div>
                <div className="elm gap-3 w-28 h-44 md:w-40 md:h-60 col-span-1 row-span-1" style={{"--r":2,"--c":4}}><img src="./photo/3.jpg" alt="3"></img></div>
                <div className="elm gap-3 w-28 h-44 md:w-40 md:h-60 col-span-1 row-span-1" style={{"--r":2,"--c":9}}><img src="./photo/4.jpg" alt="4"></img></div>
                <div className="elm gap-3 w-28 h-44 md:w-40 md:h-60 col-span-1 row-span-1" style={{"--r":2,"--c":1}}><img src="./photo/5.jpg" alt="5"></img></div>
                <div className="elm gap-3 w-28 h-44 md:w-40 md:h-60 col-span-1 row-span-1" style={{"--r":3,"--c":7}}><img src="./photo/6.jpg" alt="6"></img></div>
                <div className="elm gap-3 w-28 h-44 md:w-40 md:h-60 col-span-1 row-span-1" style={{"--r":3,"--c":3}}><img src="./photo/7.jpg" alt="7"></img></div>
                <div className="elm gap-3 w-28 h-44 md:w-40 md:h-60 col-span-1 row-span-1" style={{"--r":4,"--c":8}}><img src="./photo/8.jpg" alt="8"></img></div>
                <div className="elm gap-3 w-28 h-44 md:w-40 md:h-60 col-span-1 row-span-1" style={{"--r":4,"--c":2}}><img src="./photo/9.jpg" alt="9"></img></div>
                <div className="elm gap-3 w-28 h-44 md:w-40 md:h-60 col-span-1 row-span-1" style={{"--r":5,"--c":4}}><img src="./photo/10.jpg" alt="10"></img></div>
                <div className="elm gap-3  w-28 h-44 md:w-40 md:h-60 col-span-1 row-span-1" style={{"--r":5,"--c":1}}><img src="./photo/11.jpg" alt="11"></img></div>
                <div className="elm gap-3 w-28 h-44 md:w-40 md:h-60 col-span-1 row-span-1" style={{"--r":5,"--c":9}}><img src="./photo/12.jpg" alt="12"></img></div>
                <div className="elm gap-3 w-28 h-44 md:w-40 md:h-60 col-span-1 row-span-1" style={{"--r":6,"--c":2}}><img src="./photo/13.jpg" alt="13"></img></div>
                <div className="elm gap-3  w-28 h-44 md:w-40 md:h-60 col-span-1 row-span-1" style={{"--r":6,"--c":6}}><img src="./photo/14.jpg" alt="14"></img></div>
                <div className="elm gap-3 w-28 h-44 md:w-40 md:h-60 col-span-1 row-span-1" style={{"--r":6,"--c":8}}><img src="./photo/15.jpg" alt="15"></img></div>

           <div className=" text-6xl text-thirdDGreen fixed top-0 left-0 text-center h-full w-full  content-center font-serif font-bold  bg-slate-950/10 "><h1 className="elm2">YOUR FASHION STORE</h1></div>

            </div>
           
           </div>
        </div>
    )
};