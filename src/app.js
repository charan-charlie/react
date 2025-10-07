import React, {lazy, Suspense}from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestuarentMenu from "./components/RestuarentMenu";
//import Grocery from "./components/Grocery";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";



/**
 * 
 *  Header Component 
 *         - Logo
 *         - Nav Items
 *         - Cart 
 * 
 *  Body Component 
 *         - Search Bar
 *         - Restaurant Container
 *              - Restaurant Card
 *                  - Image
 *                  - Name
 *                  - Rating
 *                  - Cusines
 *                  - Delivery Time
 *                  - Offers
 *  Footer Component 
 *         - Copyright
 *         - Links
 *         - Contact
 * 
 */

const Grocery = lazy(() => import("./components/Grocery"));




const AppLayout = () => {
    return (
        <div className = "app">
           <Header />
           <Outlet />
           <Footer />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />    
            },
            {
                path: "/restaurants/:resID",
                element: <RestuarentMenu />
            },
            {
                path: "/grocery",
                element: <Suspense fallback = {<h1>Loading...</h1>}><Grocery /></Suspense>
            }
        ],
        errorElement: <Error />,
    },
    {
        path: "*",
        element: <Error />
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);