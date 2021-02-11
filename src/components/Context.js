import React, { Component } from 'react'
export const DataContext = React.createContext();
export class DataProvider extends Component {


    state = {
        products: [
            {
                "id": "1",
                "title": "Dell G5 5500",
                "img": "/images/1 (1).jpg",
                "desc": "Dell G5-5500 Intel®Core™ i7 -10750H - 16GB - 512GB SSD - NVIDIA® GeForce® GTX 1660 Ti 6GB GDDR6 - 15.6",
                "price": 99,
                "count": 1,
                
            },
            {
                "id": "2",
                "title": "Dell G5 5500",
                "img": "/images/1 (1).jpg",
                "desc": "Dell G5-5500 Intel®Core™ i7 -10750H - 16GB - 512GB SSD - NVIDIA® GeForce® GTX 1660 Ti 6GB GDDR6 - 15.6",
                "price": 99,
                "count": 1,
                
            },
            {
                "id": "3",
                "title": "Dell G5 5500",
                "img": "/images/1 (1).jpg",
                "desc": "Dell G5-5500 Intel®Core™ i7 -10750H - 16GB - 512GB SSD - NVIDIA® GeForce® GTX 1660 Ti 6GB GDDR6 - 15.6",
                "price": 99,
                "count": 1,
                
            },
            {
                "id": "4",
                "title": "Dell G5 5500",
                "img": "/images/1 (1).jpg",
                "desc": "Dell G5-5500 Intel®Core™ i7 -10750H - 16GB - 512GB SSD - NVIDIA® GeForce® GTX 1660 Ti 6GB GDDR6 - 15.6",
                "price": 99,
                "count": 1,
                
            },
            {
                "id": "5",
                "title": "Dell G5 5500",
                "img": "/images/1 (1).jpg",
                "desc": "Dell G5-5500 Intel®Core™ i7 -10750H - 16GB - 512GB SSD - NVIDIA® GeForce® GTX 1660 Ti 6GB GDDR6 - 15.6",
                "price": 99,
                "count": 1,
                
            },
            {
                "id": "6",
                "title": "Dell G5 5500",
                "img": "/images/1 (1).jpg",
                "desc": "Dell G5-5500 Intel®Core™ i7 -10750H - 16GB - 512GB SSD - NVIDIA® GeForce® GTX 1660 Ti 6GB GDDR6 - 15.6",
                "price": 99,
                "count": 1,
                
            },
        ],
        cart: [],
        total : 0
    };

    addCart = (id) => {
        const { products, cart } = this.state;
        const check = cart.every(item => {
            return item.id !== id
        });
        if (check) {
            
            const data = products.filter(product => {
                return product.id === id
            });
            this.setState({ cart: [...cart, ...data] })

        } else {
            alert("this product has been added")
        };
    };
    reduction = id => {
        const { cart } = this.state;
        cart.forEach(item => {
            if (item.id === id) {
                item.count === 1 ? item.count = 1 : item.count -= 1;
            }
        });
        this.setState({ cart: cart });
        this.getTotal();
    };
    increase = id => {
        const { cart } = this.state;
        cart.forEach(item => {
            if (item.id === id) {
                item.count += 1;
            }
        });
        this.setState({ cart: cart });
        this.getTotal();
    };


    removeProduct = id => {
        if (window.confirm("Do you want to remove this product?")) {
            const { cart } = this.state;
        cart.forEach((item, index) => {
            if (item.id === id) {
                cart.splice(index, 1)
            }
        });
            this.setState({ cart: cart });
            this.getTotal();
        }
        
    };

    getTotal = () => {
        const { cart } = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        }, 0)
        this.setState({ total: res })
    };


    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }



    render() {
        const { products, cart, total } = this.state;
        const {addCart, reduction, increase, removeProduct, getTotal} = this
        return (
            <DataContext.Provider value={{products, addCart, cart, reduction, increase, removeProduct, total, getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}


