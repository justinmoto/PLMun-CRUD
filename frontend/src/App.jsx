import LandingPage from "./pages/LandingPage"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import ForgotPasswordPage from "./pages/ForgotPasswordPage"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HompagePage from "./pages/HompagePage"
import ProfilePage from "./components/HomepageComponents/ProfilePage"
import AdminPage from "./pages/AdminPage"
import AdminManageAppointments from "./components/AdminComponents/AdminManageAppointments"
import AdminAppointmentList from "./components/AdminComponents/AdminAppointmentList"
import AdminFeedbacks from "./components/AdminComponents/AdminFeedbacks"
import AdminAppointmentHistory from "./components/AdminComponents/AdminAppointmentHistory"


function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/signup' element={<SignUpPage/>}/>
            <Route path='/forgotpassword' element={<ForgotPasswordPage/>}/>
            <Route path='/homepage' element={<HompagePage/>}/>
            <Route path='/admin' element={<AdminPage/>}/>
            <Route path='/manageappointment' element={<AdminManageAppointments/>}/>
            <Route path='/upcoming' element={<AdminAppointmentList/>}/>
            <Route path='/latest' element={<AdminAppointmentHistory/>}/>
            <Route path='/feedbacks' element={<AdminFeedbacks/>}/>
            <Route path='/profile' element={<ProfilePage/>}/>
        </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
