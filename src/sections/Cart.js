import React from "react"
import CartItem from "../components/CartItem"
import { products } from '../data'
import "../static/sass/Cart.sass"
import { Link } from 'react-router-dom'

export default function Cart() {
    let item = products[0]
    let total = 3596
    return (
        <div className="cart">
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">Your cart</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="container">

                        <div className="row">
                            <div className="col-10">
                                PRODUCT
                            </div>
                            <div className="col-2">
                                TOTAL
                            </div>
                        </div>
                        <CartItem 
                            imgUrl={item.imgUrl}
                            name={item.name}
                            price={item.price2}
                            size={"m"}
                            number={1}
                        />
                        <CartItem 
                            imgUrl={item.imgUrl}
                            name={item.name}
                            price={item.price2}
                            size={"m"}
                            number={1}
                            />
                        <CartItem 
                            imgUrl={item.imgUrl}
                            name={item.name}
                            price={item.price2}
                            size={"m"}
                            number={1}
                            />
                        <CartItem 
                            imgUrl={item.imgUrl}
                            name={item.name}
                            price={item.price2}
                            size={"m"}
                            number={1}
                            />
                        <CartItem 
                            imgUrl={item.imgUrl}
                            name={item.name}
                            price={item.price2}
                            size={"m"}
                            number={1}
                            />
                        <CartItem 
                            imgUrl={item.imgUrl}
                            name={item.name}
                            price={item.price2}
                            size={"m"}
                            number={1}
                            />
                        <CartItem 
                            imgUrl={item.imgUrl}
                            name={item.name}
                            price={item.price2}
                            size={"m"}
                            number={1}
                        />
                        <div className="row">
                            <div className="col-6">
                                <h5>Subtotal</h5>
                            </div>
                            <div className="col-6">
                                <h5>LE {total} EGP</h5>
                            </div>
                            <p>Taxes and shipping calculated at checkout</p>
                            <Link to="/checkout">
                                <input type="submit" value="CHECK OUT" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}