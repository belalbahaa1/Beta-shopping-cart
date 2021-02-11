import React, { Component } from 'react';
import { DataContext } from '../Context';
import { Link } from "react-router-dom";
import "../css/Details.css"


export class Cart extends Component {
    static contextType = DataContext;

    componentDidMount(){
        this.context.getTotal();
    }

    render() {
        const { cart, increase, reduction, removeProduct, total } = this.context;
        if (cart.length === 0) {
            return <h2>No Products</h2>
        } else {
            return (
                <>
                {
                    cart.map(item =>(
                        <div className="details cart" key={item.id}>
                            <img src={item.img} alt="" />
                            <div className="box">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <span>${item.price * item.count}</span>
                                </div>
                                <p> Description : <br/>
                                        {item.desc}
                                    </p>
                                    
                                <div className="amount">
                                    <button className="count" onClick={() => reduction(item.id)}> - </button>
                                    <span className="count-num">{ item.count }</span>
                                    <button className="count" onClick={() => increase(item.id)}> + </button>
                               </div>
                            </div>
                            <div className="delete" onClick={() => removeProduct(item.id)}>X</div>
                    </div>
                   )) 
                    }
                    <div className="total">
                        <Link to="/payment">Payment</Link>
                        <h3>Total :  ${ total }</h3>
                    </div>
            </>
            )
        }
    }
       
}

export default Cart
