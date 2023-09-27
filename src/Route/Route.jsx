
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Products from "../Pages/Products/Products";
import Home from "../Pages/Home/Home";
const myCreatedRoute = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout>
        
        
      ,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: '/products',
          element: <Products></Products>,
          loader : ()=>fetch(`https://dummyjson.com/products`)
         
        },
        {
            path :"/products/:id",
            element :<product></product>,
            loader : ({object})=>fetch(`https://dummyjson.com/products/${object.params.id}`)
        },
        {
            path: '/dashboard',
            element : <div>Dashboard</div>
        },
       
  
      ],
    },
  ]);
  export default myCreatedRoute;