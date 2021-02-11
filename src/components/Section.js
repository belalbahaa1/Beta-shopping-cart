import React, { Component } from 'react'
import Home from "./section/Home";
import Products from "./section/Products";
import Details from "./section/Details";
import Cart from "./section/Cart";
import Payment from "./section/Payment";
import { Route } from "react-router-dom" ;
export class Section extends Component {
    render() {
       

        return (
            <section>
              <Route path="/" component={Home} exact />
              <Route path="/product" component={Products} exact />
              <Route path="/product/:id" component={Details} />
              <Route path="/cart" component={Cart} />
              <Route path="/payment" component={Payment} />
            </section>
        )
    }
}

export default Section
