function ProductDetail(props) {
    const stars = props.product.rating;
    const emptyStars = 5 - stars;
    let starArr = [];

    // Assume start never more than 5
    if (stars == 5) {
        for (let i = 0; i < stars; i++) {
            starArr.push(<span class="glyphicon glyphicon-star"></span>);
        }
    } else {
        // Add stars to starArr
        for (let i = 0; i < stars; i++) {
            starArr.push(<span class="glyphicon glyphicon-star"></span>);
        }
        // Then add empty srars to starArr
        for (let i = 0; i < emptyStars; i++) {
            starArr.push(<span class="glyphicon glyphicon-star-empty"></span>);
        }
    }

    return (
        <div class="col-sm-4 col-lg-4 col-md-4">
            <div class="thumbnail">
                <img src={props.product.imgUrl} alt="" />
                <div class="caption">
                    <h4 class="pull-right">{props.product.price}}</h4>
                    <h4><a href="#">{props.product.name}</a>
                    </h4>
                    <p>{props.product.description}<a target="_blank" href="http://www.bootsnipp.com">Bootsnipp - http://bootsnipp.com</a>.</p>
                </div>
                <button onClick={()=>{console.log("TODO: increament action")}}>Add To Cart</button>
                <div class="ratings">
                    <p class="pull-right">{props.product.reviews} reviews</p>
                    <p>
                        {starArr}
                    </p>
                </div>
            </div>
        </div>
    )
}