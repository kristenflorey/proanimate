import React from "react";
import "./home.css";
import "./birds.css";
import Navigation from "../Navigation";
import landscape from "../../img/landscape-home.png";
import sun_logo from "../../img/pro-logo.png";
import sunrise_balloon from "../../img/sunrise-balloon.png";
import striped_balloon from "../../img/striped-balloon.png";
import right_cloud from "../../img/right-cloud.png";
import left_cloud from "../../img/left-cloud.png";
import desert_landscape from "../../img/desert-sun.png";

const Home = () => {
    return (
            <div className="main-home">
                <Navigation />
                <div className="home-illustration-1">
                    {/* <img className="home-logo" alt="home-logo" src={sun_logo}/>
                    <img className="home-landscape" alt="home-landscape" src={landscape}/> */}
                    <img className="striped-balloon" alt="striped-balloon" src={striped_balloon}/>
                    <img className="sunrise-balloon" alt="sunrise-balloon" src={sunrise_balloon}/>
                    {/* <img className="right-cloud" alt="right-cloud" src={right_cloud}/>
                    <img className="left-cloud" alt="left-cloud" src={left_cloud}/> */}

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
                </div>
                <div className="home-illustration-2">
                {/* <img className="desert-landscape" alt="desert-landscape" src={desert_landscape} /> */}
                </div>

            </div>
    )
}

export default Home;
