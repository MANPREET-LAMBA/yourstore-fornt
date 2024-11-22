import { Outlet } from "react-router-dom"
import Footer from "./componet/Footer"
import { Nav } from "./componet/Nav"

export const App_layout= ()=>{
    return(
        <>
        <Nav/>
        <Outlet/>
        <Footer/>
        </>
    )
}