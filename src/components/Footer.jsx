import React from "react";
import Img from "../assets/LOGO.png";
import '../styles/Footer.css';

export default function Footer() {
   return (
      <div className="footer container">
         <div className="footer__logo">
            <img src={Img} alt="logo de Kasa"></img>
         </div>
         <p className="footer rights">© 2020 Kasa. All rights reserved</p>
      </div>
   );
}