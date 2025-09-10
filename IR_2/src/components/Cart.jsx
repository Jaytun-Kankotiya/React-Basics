import Header from '../pages/Header';
import Footer from '../pages/Footer';

const Cart = () => {
  const cart = [
    { id: 1, name: 'Product 1', price: 99.99, quantity: 2 },
    { id: 2, name: 'Product 2', price: 129.99, quantity: 1 },
    { id: 3, name: 'Product 3', price: 79.99, quantity: 3 },
  ];

  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  const shoppingData = cart.map((item) => {
    return (
      <>
        <div className="list-group">
          <div className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
              <h5>{item.name}</h5>
              <p className="ms-auto">
                Total: ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>

            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <Header />
      <main className="container">
        <h1 className="py-3">Shopping Cart</h1>
        <p>{shoppingData}</p>
        <hr />
        <h4 className="mb-4">Total Price: ${totalPrice}</h4>
      </main>
      <Footer />
    </>
  );
};
export default Cart;
