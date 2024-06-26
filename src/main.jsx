import React,{} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home.jsx';
import About from './Component/AboutMe/About.jsx';
import Contract from './Component/Contract/Contract.jsx';
import Users from './Component/User/Users.jsx';
import DetailsData from './Component/DetailsData/DetailsData.jsx';
import Post from './Component/Posts/Post.jsx';
import ShowDetails from './Component/Posts/ShowDetails.jsx';

const router =createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path: '/about',
        element:<About></About>
      },
      {
        path:'/contract',
        element:<Contract></Contract>
      },
      {
        path:'/Users',
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        path: '/users/:id',
        loader: ({params}) =>
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
        element: <DetailsData></DetailsData>
      },
      {
        path:'/post',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Post></Post>
      },
      {
        path: '/posts/:id',
        loader:( {params})=> 
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
        element: <ShowDetails></ShowDetails>
      }
    ]
    
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
