export const Test1= ()=>{
    const logouthandler = ()=>{
        window.localStorage.setItem("IsLoggin", true);
        window.localStorage.setItem("Tokken",null);
    }
       
    return(
        <button onClick={logouthandler} className='w-fit h-auto px-3 text-lg border-2 rounded-sm  border-firstWhite py-1 hover:text-thirdDGreen hover:bg-firstWhite '>Log out</button> 
    )
}