import React from "react";
import Home from "./Home";
import Menu from "./Menu";
import About from "./About";
import Product from "./Product";
import Review from "./Review";
import Navbar from "./Navbar";
import Footer from "./Footer";


const MainScr = () => {
    return (
        <div>
            <Navbar />

            <main>
                <div id="home">
                    <Home />
                </div>

                <div id="menu">
                    <Menu />
                </div>

                <div id="about">
                    <About />
                </div>

                {/* <div id="products">
                    <Product />
                </div> */}

                <div id="review">
                    <Review />
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default MainScr;
