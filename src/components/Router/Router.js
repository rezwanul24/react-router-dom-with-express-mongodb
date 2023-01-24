import { createBrowserRouter } from "react-router-dom";
import Friend from "../Friend/Friend";
import Main from "../layout/Main";
import Post from "../post/Post";
import Contact from "../Contact/Contact";
import Friends from "../Friends/Friends";
import About from "../About/About";
import Home from "../Home/Home";
import Posts from "../Posts/Posts";
import MyLocation from "../GoogleMapApi/MyLocation";
import Ceo from "../Ceo";


export const router = createBrowserRouter([
    {path: '/', 
    element: <Main></Main>,
    children:[
        {path: '/home', element: <Home></Home>},
        {path: '/ceos', element: <Ceo></Ceo>},
        {path: '/location', element: <MyLocation></MyLocation>},
        {path: '/friends', element: <Friends></Friends>},
    {path: '/about', element: <About></About>},
    {path: '/friend', element: <Friend></Friend>},
    {path: '/post/:id',
     element: <Post></Post>},
    
    {path: '/contact', element: <Contact></Contact>}
    ]},
    {path: '/posts',
    
    element: <Posts></Posts>},
    

]);