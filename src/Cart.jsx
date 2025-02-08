import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToOrders, clearCart, decreament, increament, remove } from "./store";

function Cart() {
  const cartObject = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const cartItem = cartObject.map((item, index) => (
    <div key={index} className="card mb-3 shadow-lg">
      <div className="row g-0">
        <div className="col-2 d-flex justify-content-center align-items-center">
          <img src={item.image} alt={item.name} className="img-fluid rounded p-3" />
        </div>
        <div className="col-9">
          <div className="card-body d-flex align-items-center justify-content-between">
            <div className="d-flex flex-column justify-content-center">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text text-success fw-bold">₹{item.price.toFixed(2)}</p>
            </div>
            <div className="d-flex align-items-center gap-3">
              <button className="btn btn-success fw-bold" onClick={() => dispatch(increament(item))}> + </button>
              <span className="fw-bold">{item.quantity}</span>
              <button className="btn btn-warning fw-bold" onClick={() => dispatch(decreament(item))}> - </button>
              <button className="btn btn-danger " onClick={() => dispatch(remove(item))}>Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  const totalPrice = cartObject.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const [discPercent, setDiscPercent] = useState(0);
  const discAmount = totalPrice * discPercent / 100;

  const [showDisc, setShowDisc] = useState(false);
  const [showCouponDisc, setShowCouponDisc] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [couponCodePercent, setCouponCodePercent] = useState(0);
  const couponDiscAmt = totalPrice * couponCodePercent / 100;
  const finalAmount = totalPrice - (discAmount + couponDiscAmt);

  const handleCouponPercent = () => {
    switch (couponCode.toUpperCase()) {
      case "YUGAL@10": setCouponCodePercent(10); break;
      case "YUGAL@20": setCouponCodePercent(20); break;
      case "YUGAL@30": setCouponCodePercent(30); break;
      case "YUGAL@40": setCouponCodePercent(40); break;
      default: alert("Invalid Coupon Code!");
    }
  };

  const now = new Date();
  const purchaseDate = now.toLocaleDateString();
  const purachaseHour = now.getHours().toString().padStart(2, '0');
  const purachaseMin = now.getMinutes().toString().padStart(2, '0');
  const purachaseSec = now.getSeconds().toString().padStart(2, '0');

  const handlePurchaseDetails = () => {
    const purchaseDetails = {
      items: [...cartObject],
      totalAmount: finalAmount,
      date: purchaseDate,
      hour: purachaseHour,
      min: purachaseMin,
      sec: purachaseSec,
    };
    dispatch(addToOrders(purchaseDetails));
    dispatch(clearCart());
  };

  return (
    <div className="container mt-4">
      {cartObject.length > 0 ? (
        <div>
          <h1 className="cart-title text-center fw-bold mb-4">Shopping Cart
            <span className="rolling-cart">🛒</span></h1>
          <div className="row">
            <div className="col-lg-8">
              {cartItem}
            </div>
            <div className="col-lg-4">

              {/* Combined Total Price, Discount, Coupon and Final Amount Sections in One Div */}
              <div className="card p-3 mb-3 shadow-lg">
                <h4 className="text-success fw-bold">Total Price: ₹{totalPrice.toFixed(2)}</h4>

                {/* Discount Section */}
                {showDisc && (
                  <div className="bg-light p-2 rounded mb-3">
                    <h5 className="text-success">Discount Applied: {discPercent}%</h5>
                    <h5 className="text-danger">Discount Amount: ₹{discAmount.toFixed(2)}</h5>
                  </div>
                )}

                {/* Discount Buttons */}
                <div className="d-flex gap-2 mb-3">
                  <button className="btn btn-outline-success" onClick={() => { setDiscPercent(10); setShowDisc(true); }}>10% Off</button>
                  <button className="btn btn-outline-success" onClick={() => { setDiscPercent(20); setShowDisc(true); }}>20% Off</button>
                  <button className="btn btn-outline-success" onClick={() => { setDiscPercent(30); setShowDisc(true); }}>30% Off</button>
                </div>

                {/* Coupon Code Section */}
                <h5 className="text-secondary">Apply Coupon</h5>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Enter coupon code..."
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                {showCouponDisc && couponCodePercent > 0 && (
                  <div className="mt-2 bg-light p-2 rounded">
                    <h6 className="text-primary">Coupon Applied: {couponCode}</h6>
                    <h6 className="text-danger">Coupon Discount: {couponCodePercent}%</h6>
                    <h6 className="text-success">You Saved: ₹{couponDiscAmt.toFixed(2)}</h6>
                  </div>
                )}
                <button className="btn btn-primary w-100" onClick={() => { handleCouponPercent(); setShowCouponDisc(true); }}>Apply Coupon</button>

                <h4 className="text-dark fw-bold mt-3">Net Payable: ₹{finalAmount.toFixed(2)}</h4>
                <button className="buy-btn btn w-100 mt-2 " onClick={handlePurchaseDetails}>Buy All</button>
              </div>
            </div>

          </div>
        </div>
      ) : (
        <div className="text-center mt-5">
          <h1 className="text-danger">Your Cart is Empty</h1>
        </div>
      )}
    </div>
  );
}

export default Cart;
