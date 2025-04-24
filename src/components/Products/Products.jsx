import React from "react";
import "./Products.css";

function Products(props) {
    const { productName, title, productDescription, productSub, left, image } =
        props;
    return (
        <div className="section products">
            <div className="sectionBorder">
                <div
                    className="sectionHeader"
                    style={{ left: `${left}` + `px` }}
                >
                    <p className="headerName">{productName}</p>
                </div>
            </div>
            <div className="sectionContainer productsContainer">
                <div className="left">
                    <h1 className="productTitle">{title}</h1>
                    <p className="productDescription">{productDescription}</p>
                    <h2 className="productSub">{productSub}</h2>
                    <p className="productButton">Explore</p>
                </div>
                <div className="right">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Products;
