import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


export function Tradtitional() {
    
    useGSAP(() => {

        const tarditionalBox = document.querySelector(".tarditionalBox") 
        gsap.from(tarditionalBox, {
            scale:0,
            delay: 0.5,
            duration: 1.5,
            scrollTrigger: {
                trigger: ".tarditionalBox",
                start:"top 85%",
                end: "bottom 40%",
                scrub: 2,
                // markers:true
                
            }
        })
    })
    return (
        <div className="w-full h-[200px]  test md:h-[400px] overflow-hidden">
           
            <div className=" w-full absolute h-[245px] -z-10 "><img className="w-full h-[200px] md:h-[400px] " src="./c/traditional.jpeg" /></div>
            <div className="w-full h-[200px] md:h-[400px] bg-slate-950/40 top-0 text-gray-200/95 font-sans flex flex-col justify-center font-bold md:text-6xl text-4xl">
            <div className='tarditionalBox'>
            <h1 className=" text-center ">Enchane Your's <br/>Traditional Look</h1>
            <div className="w-full flex justify-center"> <hr className="w-60  "/></div>
            <div className=" text-base  flex justify-center pt-5"><h3>Exlpore More&gt;</h3></div>
            </div>
            </div>
        </div>)
}