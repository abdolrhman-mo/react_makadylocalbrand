import "../static/sass/CartItem.sass"

export default function CartItem({imgUrl, name, price, size, number}) {
    return (
        <div className="cart-item">
            <div className="row">
                <div className="col-4">
                    <img src={imgUrl} alt="" />
                </div>
                <div className="col-6">
                    <div className="body">
                        <p>{name}</p>
                        <p>LE {price}.00</p>
                        <p>Size: {size}</p>
                        <div className="row">
                            <div className="col-8">
                                <div className="counter">
                                    <span className="decrement">-</span>
                                    <span className="number"> {number} </span>
                                    <span className="increment">+</span>
                                </div>
                            </div>
                            <div className="col-4">
                                <i className="trash-can fa-solid fa-trash-can"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    LE
                    {price * number}
                </div>
            </div>
        </div>
    )
}