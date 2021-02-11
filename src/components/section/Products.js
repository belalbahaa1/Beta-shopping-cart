import React, { Component } from 'react'
import { DataContext } from "../Context";
import { Link } from "react-router-dom";
import "../css/Products.css";

export class Products extends Component {

    static contextType = DataContext;

    render() {

        const { products } = this.context;
        return (
            <div className="product">
              {
                    products.map(product => (
                        <div className="card" key={product.id}>
                            <Link to={`/product/${product.id}`}>
                                <img src={product.img} alt=""/>
                            </Link>
                            <div className="content">
                                <h3>
                                    <Link to={`/product/${product.id}`}>
                                    {product.title}
                                    </Link>
                                </h3>
                                <span>${product.price}</span>
                                <p>{product.desc}</p>
                                <button onClick={()=> this.context.addCart(product.id)}>Add to cart</button>
                            </div>
                      </div>
                  ))
              }
            </div>
        )
    }
}

export default Products
