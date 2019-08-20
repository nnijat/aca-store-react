class App extends React.Component {
    state = {
        shoppingCart: []
    }

    addToCart = (product) => {
        this.setState(() => {
            this.state.shoppingCart.push(product);
            return { shoppingCart: this.state.shoppingCart }
        })
    }
    render() {
        return (
            <div class="App">
                {/*</div><!--<Header>-->*/}
                <Headers shoppingCart={this.state.shoppingCart} />
                <div class="container">
                    <div class="row">
                        <div class="col-md-3">
                            <p class="lead">Shop Name</p>
                            <div class="list-group">
                                <a href="#" class="list-group-item">Category 1</a>
                                <a href="#" class="list-group-item">Category 2</a>
                                <a href="#" class="list-group-item">Category 3</a>
                            </div>
                        </div>
                        <div class="col-md-9">
                            {/*<!--<Carousel>-->*/}
                            <Carousel />
                            <div class="row">
                                {/*<!--<ProductDetail>-->*/}
                                {props.products.map((product, index) => {
                                    <ProductDetail
                                        key={index}
                                        product={product}
                                        addToCart={this.addToCart}
                                    />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <hr />
                    {/*<!--</Footer>-->*/}
                    <Footer />
                </div>
            </div>
        )
    }
}