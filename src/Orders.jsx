import { useSelector } from "react-redux";

function Orders() {
  const orders = useSelector((state) => state.purchaseDetails.orderDetails);

  const OrderItems = (items) => {
    return items.map((item, index) => (
      <li key={index} className="list-group-item d-flex align-items-center">
        <img src={item.image} alt={item.name} className="order-img me-3" style={{ width: '50px', height: '50px' }} />
        
        <div className="d-flex justify-content-between w-100">
          <span className="order-item-details">{item.name}</span>
          <span className="text-center">₹{item.price} x {item.quantity}</span>
          <span className="text-end">₹{(item.price * item.quantity).toFixed(2)}</span>
        </div>
      </li>
    ));
  };

  return (
    <>
      {orders.length > 0 ? (
        <div className="container mt-4">
          <h1 className="text-center mb-4">Purchase History</h1>
          {orders.map((order, index) => (
            <div key={index} className="card mb-3 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Order Date: {order.date} | Time: {order.hour}:{order.min}:{order.sec}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Total Amount: ₹{order.totalAmount.toFixed(2)}</h6>
                <ul className="list-group list-group-flush">
                  {OrderItems(order.items)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="container mt-4 text-center">
          <h1>No orders placed yet.</h1>
        </div>
      )}
    </>
  );
}

export default Orders;
