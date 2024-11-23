import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider ,createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import HomePage from './components/HomePage/HomePage.jsx';
import RegistrationPage from './components/RegistrationPage.jsx';
import Layout from './components/Layout.jsx';
import VerifivationPage from './components/VerificationPage.jsx';


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
        <Route path='' element={<HomePage/>} />
        <Route path='register' element={<RegistrationPage/>} />
        <Route path='verify' element={<VerifivationPage/>} />
      

    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
    
  </StrictMode>,
)
