import About from "../About/About";
import Contact from "../Contact/Contact";
import Featured from "../Featured/Featured";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ParkingList from "../ParkingList/ParkingList";
import Reviews from "../ReviewSection/Reviews/Reviews";
import "./HomePage.css"





const HomePage = () => {
  return (
    <div>
   
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <ParkingList/>
        
       
        

        
      </div>
      
        <About></About>
        <Reviews></Reviews>
    
        <Contact></Contact>
        <Footer></Footer>
    </div>
  );
};

export default HomePage;