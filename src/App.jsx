import { useState,useEffect } from 'react'
import Topbar from './Topbar';
import MainLayout from './MainLayout';
import { Route, Routes,useLocation } from 'react-router-dom';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import CreateNote from './CreateNote';
import SignupPage from './SignupPage';
import YourNotes from './YourNotes';
import Sidebar from './SideBar';
import { AlertContext, UserContext } from './Contexts';
import Alert from './Alert';
import AuthRoute from './AuthRoute';
import UserRoute from './UserRoute';
import Loading from './Loading';
import UserProvider from "./Providers/UserProvider";
import AlertProvider from "./Providers/AlertProvider";
import Footer from './Footer';
import axios from 'axios';
import Profile from './Profile';
import Contact from './Contact';
import About from './About';




function App() {
  const [user, setUser] = useState();
  const [loadingUser, setLoadingUser] = useState(true);
  


    const location= useLocation();
    const pathName=location.pathname;
  console.log(pathName)

  
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      axios.get("https://myeasykart.codeyogi.io/me", {
        headers: {
          Authorization: token,
        },
      }
      ).then((response) => {
        setUser(response.data);
        console.log(response.data.full_name);
        setLoadingUser(false);
      })
    } else {
      setLoadingUser(false);
    }
  }, [])

  if (loadingUser) {
    return <Loading/>
  }

  function signOut() {
    localStorage.removeItem("token");
    setUser('');
    console.log("hello");
  }


    return (
    <div>
      <AlertProvider>
        <UserProvider user={user} setUser={setUser}>
        
  

      <Topbar user={user} signOut={signOut}/>
    
      <Alert />

      <Routes>
        <Route index element={<MainLayout user={user}/>}/>
        <Route path="/LoginPage" element={<AuthRoute ><LoginPage/></AuthRoute>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        {user&&(<>
        <Route path="/Dashboard" element={<UserRoute><Dashboard/></UserRoute>}/>
        <Route path="/Profile" element={<UserRoute><Profile user={user}/></UserRoute>}/>
        <Route path="/CreateNote" element={<UserRoute><CreateNote/></UserRoute>
      }/>
        </>)}
        <Route path="/SignupPage" element={<AuthRoute ><SignupPage/></AuthRoute>}/>
        <Route path="/YourNotes" element={<YourNotes/>}/>
      </Routes>
      </UserProvider>
      </AlertProvider>
      <Footer/>
      </div>
      
    
  )
}

export default App;
