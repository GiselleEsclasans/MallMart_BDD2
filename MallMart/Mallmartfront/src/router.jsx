
import { routes } from './constants/routes';
import {createBrowserRouter} from "react-router-dom";
import Root from './layout/Roots.jsx';

import Home from "./pages/HomePage.jsx";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
              path: routes[0].path,
              element: <Home />,
            }
        ]
       

    }

])

