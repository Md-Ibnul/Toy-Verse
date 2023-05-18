import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Login/Register";
import Login from "../Pages/Login/Login";
import AllToys from "../Pages/AllToys/AllToys";
import ToyDetails from "../Pages/Home/ToyDetails/ToyDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/allToys',
                element: <AllToys />
            },
            {
                path: '/toyDetails/:_id',
                element: <ToyDetails />,
                loader: ({params}) => fetch(`http://localhost:5000/toyDetails/${params._id}`)
            }
        ]
    }
])

export default router;