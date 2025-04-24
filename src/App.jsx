import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Features from "./components/Features/Features";

function App() {
    const productList = [
        {
            name: "AssistIQ",
            title: "Smart Virtual Agent for Effortless Customer Support",
            description:
                "Effortlessly integrating with your existing systems — whether it's your CRM, HRMS, finance, or support platforms — AssistIQ intelligently handles customer queries, automates responses, and enhances operational efficiency.",
            sub: "An advanced, human-like AI agent designed to transform customer interactions and drive higher satisfaction.",
            left: 108,
            image: "src/assets/product1.jpg",
        },
        {
            name: "AgreeSense",
            title: "Smarter Contract Management with AI",
            description:
                " Your AI-powered contract management assistant designed to streamline how you manage legal agreements. With AgreeSense, you can accelerate contract cycles, reduce legal risks, and drive smarter business decisions—all powered by AI.",
            sub: "Experience faster, safer, and smarter contract management with AgreeSense.",
            left: 344,
            image: "src/assets/product2.jpg",
        },
        {
            name: "UnifyX",
            title: "Make Your Enterprise Smarter by Empowering Your Workforce",
            description:
                " Managing hundreds of applications shouldn’t mean complexity for your employees. UnifyX simplifies enterprise workflows by integrating all your business applications into a single, unified platform.",
            sub: "Transform employee productivity with UnifyX — one platform, endless possibilities.",
            left: 576,
            image: "src/assets/product3.jpg",
        },
    ];

    return (
        <div className="App">
            <NavBar></NavBar>
            <Hero></Hero>
            <div>
                {productList.map((item) => (
                    <Products
                        productName={item.name}
                        title={item.title}
                        productDescription={item.description}
                        productSub={item.sub}
                        left={item.left}
                        image={item.image}
                    />
                ))}
            </div>
            <Features></Features>
        </div>
    );
}

export default App;
