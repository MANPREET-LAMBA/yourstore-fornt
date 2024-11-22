import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function Modern() {
    useGSAP(() => {
        let textElm = document.querySelector(".testModern");

        gsap.from(textElm, {
            scale: 0,
            delay: 0.5,
            duration: 1.5,
            scrollTrigger: {
                trigger: ".testModern",
                start: "top 85%",
                end: "bottom 40%",
                scrub: 2              

            }
        })
    })
    return (
        <div>
            <div className="w-full h-[232px]  md:h-[600px] flex flex-col  overflow-hidden">

                <div className=" w-full absolute -z-10 h-[232px] md:h-[600px] overflow-hidden "><img className="w-full h-[232px] md:h-[600px] " src="./c/best.jpg" /></div>
                <div className="w-full h-[600px]  md:h-[600px] bg-slate-950/40 top-0 text-gray-200/95 font-sans flex flex-col justify-center font-bold md:text-6xl text-4xl">
                    <div className='testModern'>
                        <h1 className="  text-center ">Best Selling Iteams 50% OFF</h1>
                        <div className="w-full flex justify-center"> <hr className="w-7/12 h-2" /></div>
                        <div className=" text-base  flex justify-center pt-5"><h3>Exlpore More&gt;</h3></div>
                    </div>
                </div>
            </div>
        </div>
    )
}