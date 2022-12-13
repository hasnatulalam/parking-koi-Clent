
import { Routes, Route, Link } from "react-router-dom";
import Register from "../src/components/Auth/Register/Register";
import Login from "./components/Auth/Login/Login";
import  ForgetPassword from "./components/Auth/ForgotPassword/ForgotPassword"
import ChangePassword from "./components/Auth/ChangePassword/ChangePassword"
import Navbar from "./components/Shared/Navbar/Navbar"
import HomePage from "./components/Home/HomePage/HomePage";
import List from "./components/ParkingBooking/SearchList/List"
import SingleSearchItem from "./components/ParkingBooking/SingleSearchItem/SingleSearchItem";
import StripePayment from "./components/ParkingBooking/Pay/StripePayment";
import NewParking from "./components/Owner/NewParking/NewParking";
import NewParkingSpace from "./components/Owner/NewParkingSpace/NewParkingSpace";
import Dashboard from "./components/Shared/DashBoard/DashBoard";
import UserReview from "./components/User/UserReview/UserReview";
import Booking from "./components/User/MyBooking/MyBooking";
import AllUsers from "./components/Admin/AllUsers/AllUsers";
import MakeAdmin from "./components/Admin/MakeAdmin/MakeAdmin";
import AllParking from "./components/Admin/All Parking Space/AllParking";



function App() {
  return (
    <div>

   <Navbar></Navbar>
    <Routes>
    <Route path="/" element={<HomePage />}/>
    <Route path="/Parking" element={<List/>}/>
    <Route path="/Parking/:id" element={<SingleSearchItem/>}/>
    <Route path="/bookings" element={<Booking/>}/>
    <Route path="/pay" element={<StripePayment/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>

          
          <Route path="/reset-password" element={<ForgetPassword/>}/>
          <Route path="/user/reset/:id/:token" element={<ChangePassword />} />
        
          <Route path="/addParking" element={<NewParking/>}/>
          <Route path="/newParkingSpace" element={<NewParkingSpace/>}/>
          <Route path="/review" element={<UserReview/>}/>
          <Route path="/user" element={<AllUsers/>}/>
          <Route path="/makeAdmin" element={<MakeAdmin/>}/>
          <Route path="/AllParking" element={<AllParking/>}/>
    </Routes>
             
       
      
                    
                 
          
         
         
    
          
         
           
         
         
    
            
           
            
           
           
    
            
            
            
        </div>
  );
}

export default App;
