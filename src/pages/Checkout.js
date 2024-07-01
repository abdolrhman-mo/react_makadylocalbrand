import Nav from "../sections/Nav"
import Footer from "../sections/Footer"

export default function Checkout() {
    return (
        <div>
            <Nav />
            <div className="checkout">
                <div className="container">
                    <div className="row">
                        <div className="col-7">
                            <div className="collect-info">
                                <div className="contact">
                                    <h3>Contact</h3>
                                    <input type="number" placeholder="Mobile phone number" name="" id="" />
                                </div>
                                <div className="delivery">
                                    <h3>Delivery</h3>
                                    // egypt
                                    <input type="text" placeholder="First name" />
                                    <input type="text" placeholder="Last name" />
                                    <input type="text" placeholder="Last name" />
                                    <input type="text" placeholder="Last name" />
                                    <input type="text" placeholder="Last name" />
                                    <input type="text" placeholder="Last name" />
                                    <input type="checkbox" name="" id="saveinfo" />
                                    <label htmlFor="saveinfo">Save this information for next time</label>
                                    <h4>Shipping method</h4>
                                    Standard
                                </div>
                                <div className="payment">
                                    <h3>Payment</h3> 
                                </div>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="order-summary">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}