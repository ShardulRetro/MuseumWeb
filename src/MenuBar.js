import React from "react";
import "./App.css";
import {useState,useEffect} from "react";
const Menubar = () =>{
    const [scrolled,setScrolled] = useState(false);
    useEffect(()=>{
       const handlescroll = () =>{
          const  scrollY = window.scrollY;
        if(scrollY > 5){
          setScrolled(true)
        }
        else{
          setScrolled(false)
        }
  
        }
  window.addEventListener("scroll",handlescroll);
    },[])
    
    return(
            <div className = {`top-menu-bar ${scrolled ? "scrolled":""}`}>
                    <ul className="menu-items">
                        <p>CHHATRAPATI SHIVAJI MAHARAJ VASTU SANGRAHALAYA</p>
                        <li><a href="#home">Who Are We</a></li>
                        <li><a href="#about">Venue for Hire</a></li>
                        <li><a href="#services">Visit Us</a></li>
                        <li><a href="/newpage">Analysis</a></li>
                    </ul>

            </div>


    );

};
export default Menubar;
