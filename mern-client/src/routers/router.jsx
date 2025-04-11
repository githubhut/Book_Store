import {
  createBrowserRouter,
  RouterProvider,
  useParams,
}
  from "react-router-dom";
import App from '../App';
import Home from '../home/Home';
import Shop from '../shop/Shop';
import About from '../components/About';
import Blog from '../components/Blog';
import SingleBook from "../shop/SingleBook";
import Dashboard from "../dashboard/Dashboard";
import DashboardLayout from "../dashboard/DashboardLayout";
import UploadBooks from "../dashboard/UploadBooks";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import Signup from "../components/Signup";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../components/Logout";
const router = createBrowserRouter([{

  path: "/",
  element: <App />,
  children: [
    {
      path: '/',
      element: <Home />
    },

    {
      path: '/shop',
      element: <Shop />
    },

    {
      path: '/about',
      element: <About />
    },
    
    {
      path: '/blog',
      element: <Blog />
    },
    {
      path: '/book/:_id',
      element: <SingleBook />,
      loader: async ({ params }) => {
        return fetch(`https://book-store-backend-cqp2.onrender.com/book/${params._id}`)
          .then(res => res.json())
      }
    },
    
   
  ]
},


{
  path: "/admin/dashboard",
  element: <DashboardLayout />,
  children: [
    {
      path: "/admin/dashboard",
      element: <PrivateRoute> <Dashboard /> </PrivateRoute>
    },
    {
      path: "/admin/dashboard/upload",
      element: <UploadBooks />
    },
    {
      path: "/admin/dashboard/manage",
      element: <ManageBooks />
    },
    {
      path: "/admin/dashboard/edit-books/:_id",
      element: <EditBooks />,
      loader: async ({ params }) => {
        try {
          const res = await fetch(`https://book-store-backend-cqp2.onrender.com/${params._id}`);
          if (!res.ok) {
            throw new Error("Failed to fetch book");
          }
          return res.json();
        } catch (err) {
          console.error(err);
          throw err;
        }
      }
      
    },
  ]
},
{
  path: "sign-up",
  element: <Signup/>
},
{
  path: "login",
  element: <Login/>
},
{
  path: "logout",
  element: <Logout />
}
]);

export default router;



