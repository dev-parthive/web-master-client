import CourseDetails from "../pages/CourseDetails/CourseDetails";
import Courses from "../pages/Courses/Courses";
import FAQ from "../pages/FAQ/FAQ";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layouts/Main");
const { default: Home } = require("../pages/Home/Home");
const { default: WrongRoute } = require("../pages/404-page/WrongRoute");
const { default: Blog } = require("../pages/Blog/Blog");

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
            },{
                path: '/blog',
                element:<Blog></Blog>
            },{
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/course/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({params}) => fetch(`https://web-master-server-mu.vercel.app/course/${params.id}`)
            },{
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '*',
        element: <WrongRoute></WrongRoute>
    }
])