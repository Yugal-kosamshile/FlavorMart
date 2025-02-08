import { useSelector } from "react-redux";

function Orders() {
  const orders = useSelector((state) => state.purchaseDetails.orderDetails);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4 fw-bold cart-title">
        Order History <i className="fa-solid fa-history floating"></i>
      </h1>
      {orders.length > 0 ? (
        orders.map((order, index) => (
          <div key={index} className="card mb-4 shadow-sm">
            <div className="card-body">
              {/* Order Details */}
              <h5 className="card-title fw-bold">
                Order Date: {order.date} | Time: {order.hour}:{order.min}:{order.sec}
              </h5>
              <h6 className="card-subtitle mb-3 text-muted">
                Total Amount: <span className="fw-bold text-success">₹{order.totalAmount.toFixed(2)}</span>
              </h6>

              {/* Table for Order Items */}
              <div className="table-responsive">
                <table className="table table-bordered text-center align-middle">
                  <thead className="table-dark">
                    <tr>
                      <th>#</th>
                      <th>Product</th>
                      <th>Item Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.items.map((item, idx) => (
                      <tr key={idx}>
                        <td>{idx + 1}</td>
                        <td>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="rounded"
                            style={{ width: "50px", height: "50px", objectFit: "cover" }}
                          />
                        </td>
                        <td className="fw-semibold">{item.name}</td>
                        <td>₹{item.price.toFixed(2)}</td>
                        <td>{item.quantity}</td>
                        <td className="fw-bold text-success">₹{(item.price * item.quantity).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="container mt-4 text-center">
          <h1 className="text-muted">No orders placed yet.</h1>
        </div>
      )}
    </div>
  );
}

export default Orders;
