import { useParams } from "react-router-dom"
import { products, slide } from "../data"
import Nav from "../sections/Nav"
import Footer from "../sections/Footer"
import ProductList from "../sections/ProductList"
import "../static/sass/ProductDetails.sass"
import "../static/sass/Product.sass"

export default function ProductDetails() {
    let { index } = useParams()
    index--
    const product = products[index]
    let sale
    if (product.sale) {
        sale = <p className="sale">{product.sale}</p>
    }
    let price
    if (product.price1) {
        price = <span className="line-through">{product.price1} EGP </span> + <span className="theme-color">{product.price2} EGP </span>
    } else {
        price = <span className="theme-color">{product.price2} EGP </span>
    }
    return (
        <div className="product-page">
            <Nav />
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={product.imgUrl} alt="" />
                        </div>
                        <div className="col-6">
                            <div className="text">
                                {sale}
                                <h2>{product.name}</h2>
                                <h3>
                                    {price}
                                </h3>
                                <p className="gray">{slide.describtion}</p>
                                <select>
                                    <option value="s">s</option>
                                    <option value="m">m</option>
                                    <option value="l">l</option>
                                    <option value="xl">xl</option>
                                </select>
                                <p className="gray">Purchase this product now and earn {product.price2} Points!</p>
                                <a href="" className="cta">Add To Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="more">
                <ProductList
                    title="Related products"
                    tag="trending"
                />
            </div>
            <Footer />
        </div>
    )
}