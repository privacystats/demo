import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Home from "./pages/home/Home"
import Profile from "./pages/profile/Profile"
import Friends from "./pages/friends/Friends"
import Gallery from "./pages/gallery/Gallery"
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar"
import Sidebar from "./components/sidebar/Sidebar"
import Bot from "./components/bot/Bot"

function App() {

  const Layout = ()=>{
    return (
      <div>
        <Navbar />
        <div className="main justify-between">
          <Sidebar />
          <Outlet />
          <Bot />
        </div>
      </div>

    )
  }

  var LoggedIn = true;

  const ProtectedRoute = ({children}) => {
    if(!LoggedIn){
      return <Navigate to="/login" />
    }

    return children
  }

  const router = createBrowserRouter([
    { path: '/', 
      element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
      ), 
      children: [
        {path: '/home', element: <Home />},
        {path: '/profile/:id', element: <Profile />},
        {path: '/friends', element: <Friends />},
        {path: '/gallery', element: <Gallery />}
      ]
    },
    {path: '/login', element: <Login />},
    {path: '/register', element: <Register />},
  ]);

  return (
    <div className="App overflow-hidden bg-gray-100">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
