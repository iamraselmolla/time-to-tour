import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Components/Main';
import Home from './Components/Pages/Home/Home';
import Blog from './Components/Pages/Blog/Blog';
import AddaPackage from './Components/Pages/AddaPackage/AddaPackage';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';
import Terms from './Components/Pages/Terms/Terms';
import Allpackages from './Components/Shared/Packages/Allpackages';
import PackageDetails from './Components/Shared/Packages/PackageDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRouter from './Components/Routers/PrivateRouter';
import ErrorPage from './Components/Pages/404/ErrorPage';
import EditComment from './Components/Shared/EditComment';
import Myreviews from './Components/Pages/MyReviews/Myreviews';
import Myservices from './Components/Pages/MyService/Myservices';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => {
            return fetch('https://service-server-beryl.vercel.app/home')
          }
        },
        {
          path: '/services',
          element: <Allpackages></Allpackages>,
          loader: () => {
            return fetch('https://service-server-beryl.vercel.app/packages')
          }
        },
        {
          path: '/services/:id',
          element: <PackageDetails></PackageDetails>,
          loader: ({params}) => {
            return fetch(`https://service-server-beryl.vercel.app/packages/${params.id}`)
          }
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/add-a-service',
          element: <PrivateRouter><AddaPackage></AddaPackage></PrivateRouter>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/terms-conditions',
          element:<Terms></Terms>
        },
        {
          path: '/my-reviews',
          element:<PrivateRouter><Myreviews></Myreviews></PrivateRouter>
        },
        {
          path: '/my-services',
          element:<PrivateRouter><Myservices></Myservices></PrivateRouter>
          },
        {
          path: '/edit-comment/:id',
          element: <EditComment></EditComment>,
          loader: ({params}) => {
            return fetch(`https://service-server-beryl.vercel.app/edit-comment/${params.id}`)
          }
        },
        {
          path: '*',
          element: <ErrorPage></ErrorPage>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
