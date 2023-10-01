
import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home";
import DonationPage from '../Pages/DonationPage'
import Statistics from '../Pages/Statistics'
import DonationDetails from "../components/DonationDetails";
import Login from "../components/Login";
import SignUp from "../components/SignUp";


export const router = createBrowserRouter([
    {path:'/', loader: ()=> fetch('/data.json') , errorElement: <ErrorPage/>, element: <Root/>, children:[

        {path:'/', element: <Home/> },
        {path:'/donation', element: <DonationPage/>},
        {path:'/statistics', element: <Statistics/>},
        {path:'/donation-details/:id', element: <DonationDetails/>},
        {path:'/login', element: <Login/>},
        {path:'/signUp', element: <SignUp/>},
    ]}
])
