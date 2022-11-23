import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Form/Login";
import Register from "../pages/Form/Register";
import Main from "./Main/Main";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element:<Login/>
            },
            {
                path: '/register',
                element:<Register/>
            }
        ]
    }
])