import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";

import Home from './componet/Home';
import { Search } from "./componet/Search";
import { Auth } from "./componet/Auth";
// import { Signup } from "./componet/Signup";
// import { Login } from "./componet/Login";
// import { Card_info } from "./componet/Card_info";
import { App_layout } from "./App_layout";
import { Datapost } from "./componet/Datapost";
import { Cardview } from "./componet/CardView";
import { Cart } from "./componet/Cart";
import { Logoutcheck } from "./componet/Logoutcheck";




const router = createBrowserRouter([

    {
        path:"/",
        element: <App_layout/>,
        children:[
            {
                path: "/",
                element: <Home />,
            },
        
            {
                path: "/suit",
                element: <Search searchiteam = "suit" />,
            },
        
            {
                path: "/bedsheets", 
                element: <Search searchiteam = "bedsheet"  />,
            },
        
            {
                path: "/kurties",
                element: <Search searchiteam = "kuriti"  />
            },
        
            {
                path: "/about",
                element: <Home />,
            },
            // {
            //     path:"/card",
            //     element: <Card_info/>
            // },
            {
                path:"/product_post",
                element: <Datapost/>
               },
            {
                path: "/login",
                element: <Auth />,
            },
            {
                path: "/product",
                element: <Cardview/>,
            },
            {
                path: "/cart",
                element:<Cart/>
            },
            {
                path: "/check",
                element : <Logoutcheck/>
            }
            
        ]
    },
    
 
    
]);

function Page_route() {
    return (
         <RouterProvider router={router} />
      
    )
}

export default Page_route;
