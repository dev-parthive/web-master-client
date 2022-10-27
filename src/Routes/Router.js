import Courses from "../pages/Courses/Courses";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layouts/Main");
const { default: Home } = require("../pages/Home/Home");
const { default: WrongRoute } = require("../pages/404-page/WrongRoute");

export const routs = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>, 
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            }
        ]
    },
    {
        path: '*',
        element: <WrongRoute></WrongRoute>
    }
])