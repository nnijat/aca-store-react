const products = state.products;
const numberOfItemsInCart = state.numberOfItemsInCart;

ReactDOM.render(
    <APP
        products={products}
        numberOfItemsInCart={numberOfItemsInCart} />,
    document.getElementById("root")
)
