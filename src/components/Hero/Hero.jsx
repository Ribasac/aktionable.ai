import React from "react";
import "./Hero.css";
import heroVideo from "../../assets/hero.mp4";

function Hero() {
    return (
        <div className="section hero">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="heroBG"
                src={heroVideo}
            ></video>
            <div className="sectionContainer column">
                <div className="heroContent">
                    <h1 className="header green">Smarter AI.</h1>
                    <h1 className="header blue"> Real Results.</h1>
                    <p className="heroDescription">
                        Unlock the power of real-world AI. aktionable.ai
                        empowers businesses with intelligent insights and
                        ready-to-implement actions, designed for tangible
                        impact, not just theory.
                    </p>
                </div>
                <div className="heroButton">
                    <h2 className="demoButton">Request Demo</h2>
                </div>
            </div>
        </div>
    );
}

export default Hero;
