import React from "react";
import "./home.css";
import "./birds.css";
import Navigation from "../Navigation";
import sunrise_balloon from "../../img/sunrise-balloon.png";
import striped_balloon from "../../img/striped-balloon.png";
import tumbleweed from "../../img/tumbleweed.svg"

const Home = () => {
    return (
            <div className="main-home">
                <Navigation />
                <section id="home-illustration-1">
                    <div class="container">
                        <div class="bird-container--one">
                            <div class="bird--one"></div>
                        </div>

                        <div class="bird-container--two">
                            <div class="bird--two"></div>
                        </div>

                        <div class="bird-container--three">
                            <div class="bird--three"></div>
                        </div>

                        <div class="bird-container--four">
                            <div class="bird--four"></div>
                        </div>
                    </div>
                    <img className="striped-balloon" alt="striped-balloon" src={striped_balloon}/>
                    <img className="sunrise-balloon" alt="sunrise-balloon" src={sunrise_balloon}/>

                </section>
                <section id="home-illustration-2">
                    <img className="tumbleweed" alt="tumbleweed" src={tumbleweed} />
                </section>
                <section id="home-illustration-3">
                </section>
                <section id="home-illustration-4">
                </section>

            </div>
    )
}

export default Home;
