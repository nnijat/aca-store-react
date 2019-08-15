function App(props) {
    return (
        <div class="App">
            {/*</div><!--<Header>-->*/}
            <Headers />
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
                            {props.products.map((p, index) => {
                                <ProductDetail
                                    key={index}
                                    product={p}
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