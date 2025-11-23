import { useQuery } from "@tanstack/react-query";
import { getUserOrders } from "../services/orderService";
import { auth } from "../firebaseConfig";

function Orders({ orders: overrideOrders }) {
  const userId = auth.currentUser?.uid ?? null;

  const { data: fetchedOrders, isLoading } = useQuery({
    queryKey: ["orders", userId],
    queryFn: () => getUserOrders(userId),
    enabled: !overrideOrders, // Skip fetching when tests provide data
  });

  const orders = overrideOrders || fetchedOrders || [];

  if (isLoading) return <p>Loading...</p>;
  if (orders.length === 0) return <p>No orders found</p>;

  return (
    <div className="container">
      <h2>Your Orders</h2>

      {orders.map((order) => (
        <div key={order.id} className="card">
          <p>Order ID: {order.id}</p>
          <p>Name: {order.name}</p> {/* Added */}
          <p>Qty: {order.quantity}</p> {/* Added */}
          <p>Date: {order.createdAt.toDate().toLocaleString()}</p>
          <p>Total: ${order.total}</p>
          <a href={`/orders/${order.id}`}>View Details</a>
        </div>
      ))}
    </div>
  );
}

export default Orders;
