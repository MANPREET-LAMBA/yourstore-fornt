export function Cardshow(props) {
    const addToCard = ()=>{

    }
    return (
        <div className="h-auto pt-8 pb-8  md:flex">
            <div className="w-full h-1/2 flex   justify-center  md:w-1/2 md:h-full"><img className=" w-2/3 h-1/3" src={props.image} /></div>
            <div className="w-full h-1/2  flex gap-40 justify-center ">  
                <div className="w-11/12  font-semibold">
                    <div className="text-4xl"><h1>{props.productname}</h1></div>
                    <div className="text-2xl"><h3>Rs. {props.price}</h3></div>
                    <div className="flex pt-2 gap-2">
                        <button className=" w-60 h-auto p-3 border-2 rounded-sm  border-thirdDGreen hover:text-firstWhite hover:bg-thirdDGreen ">Buy Now</button>
                        <button className=" w-60 h-auto p-3 border-2 rounded-sm  border-thirdDGreen hover:text-firstWhite hover:bg-thirdDGreen">Add to cart</button>
                    </div>
                    <div className=""><h3>Discription:</h3></div>
                    <div className="text-1xl"><p>{props.discription}</p></div>
                </div>


            </div>
        </div>
    )
}