import React, { createContext } from 'react';

export const ShopContext = createContext(); // create context

class ShopContextProvider extends React.Component {
    state = {
        "products": [
            { "id": 1, name: "Laptop", price: 200 },
            { "id": 2, name: "Mobile", price: 300 },
            { "id": 3, name: "HP computer", price: 400 },
            { "id": 4, name: "iphone 11 pro max", price: 500 },
            { "id": 5, name: "Mac Book Air", price: 600 },

        ]
    }
    render() {
        return (
            <ShopContext.Provider value={{ ...this.state.products }}>
                {this.props.children}
            </ShopContext.Provider>
        );
    }
}

export default ShopContextProvider;