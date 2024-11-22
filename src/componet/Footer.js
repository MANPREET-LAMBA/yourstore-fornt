export default function Footer() {
    return (
        <div className="w-full h-[200px] z-[999]">
            <div className="bg-black w-full md:h-24 content-center"> <h1 className="text-white font-serif font-bold text-center text-3xl py-2 md:text-5xl">HOMEGROWN INDIAN BRAND</h1></div>
            <div className="flex flex-wrap text-sm md:text-xl font-semibold  justify-between px-5 md:px-28 pt-5">
                <div>
                    <h3>NEED HELP</h3>
                    <div className="text-xs font-normal">
                    <h6>Contact Us</h6>
                    <h6>Track Order</h6>
                    <h6>Return & Refund</h6>
                    </div>
                </div>
                <div>
                    <h3>COMPANY</h3>
                    <div className="text-xs font-normal">
                    <h6>About Us</h6>
                    <h6>Careers</h6>
                    </div>
                </div>
                <div>
                    <h3>MORE INFO</h3>
                   <div className="text-xs font-normal">
                   <h6>T&C</h6>
                   <h6>Privacy Policy</h6>
                   </div>
                </div>
            </div>
            <div className="flex md:justify-center  pt-3 flex-col items-center md:flex-row md:text-lg font-bold">
                <div>100% Secure Payment Methods:</div>
                <div className="bg-slate-600 w-7 h-4"></div>
            </div>
            <div className="text-lg font-bold flex justify-between items-center px-5 pt-3 md:px-14"> 
                <div>Since 2024</div>
                <div className="bg-slate-600 w-7 h-4" ></div>
            </div>


        </div>
    )
}