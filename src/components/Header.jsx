import React, { useState } from "react";
import ecommerceImage from "../images/ecommerce.png";
import "../css/header.css";

const Header = () => {
    const [tema,setTema] = useState(false);

    const changeTema = () => {
        const root = document.getElementById("root");
        setTema(!tema); 
        // var olan temanin tersini al
        if(tema){
            root.style.backgroundColor="black";
            root.style.color="#fff"
        }else{
            root.style.backgroundColor="#fff";
            root.style.color="black"    
        }
    }

  return (
    <nav class="navbar ">
      <div class="container">
            <div className="flex-row">
                    <img  className="logo " src={ecommerceImage} alt="Ecommerce" />
                    <p className="logoText mt-3 ms-2">YNS TED.AS.</p>
            </div>
            <form className="flex-row ">
                        <input
                            className="form-control me-2 searchBtn"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                       <div className="icons-header flex-row">
                                <i onClick={changeTema} className="fa-solid fa-circle-half-stroke"></i>
                                <i className="fa-solid fa-cart-shopping"></i>
                       </div>
            </form>
      </div>
    </nav>
  );
};

export default Header;
