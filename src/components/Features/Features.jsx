import React, { use, useLayoutEffect, useRef, useState } from "react";
import "./Features.css";
import FeaturesCard from "./reusables/FeaturesCard";

function Features() {
    const featuresList = [
        {
            id: "insight-001",
            title: "Actionable Insights",
            description:
                "Identify patterns, risks, and opportunities — and act on them instantly.",
        },
        {
            id: "automation-002",
            title: "Intelligent Automation",
            description:
                "Seamlessly automate workflows, enhance operations, and drive efficiencies.",
        },
        {
            id: "decisioning-003",
            title: "Predictive Decisioning",
            description:
                "Empower teams with AI-driven recommendations that reduce guesswork.",
        },
        {
            id: "scalability-004",
            title: "Enterprise-Grade Scalability",
            description:
                "Built for large-scale organizations with agility, security, and reliability.",
        },
    ];

    const featureTop = useRef(null);
    const [offsetHeight, setOffset] = useState(0);

    useLayoutEffect(() => {
        setOffset(featureTop.current.offsetHeight);
    }, []);

    return (
        <div className="section features">
            <div className="sectionContainer">
                <div className="featuresTop" ref={featureTop}>
                    <h1 className="featuresTitle">
                        Most AI platforms give you insights.
                    </h1>
                    <h1 className="featuresTitle greenFeatures">
                        aktionable.ai gives you results.
                    </h1>
                    <p className="featuresSub">
                        Unlike traditional analytics systems, our platform is
                        built to bridge the gap between insight and
                        action—delivering real outcomes, not just reports.
                    </p>
                </div>
                <div className="featuresBottom">
                    <div
                        className="featuresImage"
                        style={{ top: `${offsetHeight}` + `px` }}
                    >
                        <img src="/src/assets/features.jpg" alt="" />
                    </div>
                    <div className="featuresList">
                        {featuresList.map((item) => (
                            <FeaturesCard
                                title={item.title}
                                description={item.description}
                            ></FeaturesCard>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;
