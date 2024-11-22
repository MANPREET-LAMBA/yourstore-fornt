import { Cartshow } from "./Cartshow";

export function Cart() {
    return (
        <div className="pt-20 flex justify-center items-center ">
            <div className=" p-3 border-2 border-thirdDGreen rounded-sm w-4/5">
                <div className="w-full h-auto font-bold font-sans text-5xl flex justify-center"><h1>Shopping Cart...</h1></div>
                <div className="w-full  ">
                   { <Cartshow/>}
                </div>
                <div>
                    <div>Total</div>
                    <div>amount</div>
                </div>
            </div>
        </div>
    )
}