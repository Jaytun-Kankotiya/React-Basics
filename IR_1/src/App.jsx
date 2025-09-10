import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './pages/Header';
import Footer from './pages/Footer';
import { Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main className="container">
        <h1 className="py-3">Featured Products</h1>
        <div className="row mb-4 ">
          <div className="col-md-4">
            <div className="card">
              <img
                className="card-img-top"
                src="https://placehold.co/400x300"
                alt="Product 1"
              />
              <div className="card-body">
                <h5 className="card-title">Product 1</h5>
                <p className="card-text">
                  Description of Product 1, Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
                <Link className="btn btn-primary" to="/products/1">
                  View Product
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img
                className="card-img-top"
                src="https://placehold.co/400x300"
                alt="Product 2"
              />
              <div className="card-body">
                <h5 className="card-title">Product 2</h5>
                <p className="card-text">
                  Description of Product 2, Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
                <Link className="btn btn-primary" to="/products/2">
                  View Product
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img
                className="card-img-top"
                src="https://placehold.co/400x300"
                alt="Product 3"
              />
              <div className="card-body">
                <h5 className="card-title">Product 3</h5>
                <p className="card-text">
                  Description of Product 3, Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
                <Link className="btn btn-primary" to="/products/3">
                  View Product
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
