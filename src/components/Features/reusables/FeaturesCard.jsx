import React from "react";

function FeaturesCard(props) {
    const { title, description } = props;
    return (
        <div className="featuresCard">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default FeaturesCard;
