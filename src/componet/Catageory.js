import { Card } from "./Cards" 
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const images=[{imgss: "./c/1.jpg",title:"Suit",url:"/suit"},{imgss: "./c/2.jpeg",title:"Kurti",url:"/kurties"},{imgss: "./c/3.jpg",title:"Bedsheet",url:"/bedsheets"},{imgss: "./c/4.jpg",title:"Jewellary",url:"/"}];

export function Catageory()
{
    useGSAP(()=>{
        let elm1 = document.querySelector(".elm1"); 
        let elm2 = document.querySelector(".cardsElm");

        const timeline = gsap.timeline();
        gsap.from(elm1,{
           opacity:0,
            y: 80,
            delay:0.5,
            duration: 1.5,
            scrollTrigger:{
               trigger:".box",
               start:"top bottom",
               end: "bottom 40%",
               scrub:2
               
            }

        })
        gsap.from(elm2,{
            opacity:0,
            y: 80,
            delay:0.5,
            duration: 1.5,
            scrollTrigger:{
               trigger:".box",
               start:"top bottom",
               end: "bottom 40%",
               scrub:2
               
            }
            

        })

    })
    return(
        <div className="w-full box h-auto pb-12 bg-thirdDGreen">
             <div className=" elm1 text-4xl overflow-hidden text-firstWhite/85 font-serif font-semibold text-center py-4 md:text-6xl" ><h1>Catageory</h1></div>
             <div className=" cardsElm flex justify-center flex-wrap gap-6 pt-3 md:gap-16">
                 { 
                    images.map((e)=>{
                       
                        let source =e.imgss;
                        let url = e.url;
                        let heading = e.title;
                        console.log(heading)
                       return(<Card image={source} title={heading} url={url}></Card>)
                    })
                 }
             </div>
        </div>
    )
}