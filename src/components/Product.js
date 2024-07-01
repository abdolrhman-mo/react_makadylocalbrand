import { Link } from "react-router-dom";
import '../static/sass/Product.sass'
import { useState } from "react";

function Product({name, imgUrl, sale, price1, price2, index}) {
  index++
  const productLink = "/product/" + index
  // const [productHeight, setProductHeight] = useState(innerWidth / 4)
  let innerWidth = 1100
  const [productHeight, setProductHeight] = useState(innerWidth / 4)
  setInterval(() => {
    if (innerWidth > 768) {
        setProductHeight(innerWidth / 4)
    } else {
      setProductHeight(innerWidth / 2.5)
    }
  }, 400);
  if (sale) {
    sale = <p className="sale">{sale}</p>
  }
  let price
  if (price1) {
    price = <span className='line-through'>{price1}.00 EGP</span> + price2 + ".00 EGP"
  } else {
    price = price2 + ".00 EGP"
  }
  return (
    <div className="product">
        <div className="top" style={{backgroundImage: "url(" + imgUrl + ")", height: productHeight + "px"}}>
          {sale}
          <div className="links">
            <i className="fa-regular fa-heart"></i>
            <i className="fa-solid fa-cart-shopping" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"></i>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        <div className="body">
          <Link className="title" to={productLink}>
            <h3>{ name }</h3>
          </Link>
          <p className="price">
            {price}
          </p>
          <a className="add-to-wishlist" href='#hoodie'>
            <i className="fa-regular fa-heart"></i>
            Add to Wishlist
          </a>
        </div>
    </div>
  );
}

export default Product;
