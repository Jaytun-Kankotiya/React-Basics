import Footer from '../pages/Footer';
import Header from '../pages/Header';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <>
      <Header />
      <main className="container mb-4">
        <h1 className="py-2">Products</h1>

        <div className="card mb-2">
          <div className="row d-flex">
            <div className="col-md-4">
              <img
                className=""
                src="https://placehold.co/300x300"
                alt="Product 1"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Product 1</h5>
                <p className="card-text">
                  Description of Product 1, Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed tristique fringilla ipsum,
                  nec tincidunt turpis elementum nec.
                </p>
                <p className="card-text">Price: $99.99</p>
                <Link className="btn btn-primary" to="/products/1">
                  View Product
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-2">
          <div className="row d-flex">
            <div className="col-md-4">
              <img
                className=""
                src="https://placehold.co/300x300"
                alt="Product 2"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Product 2</h5>
                <p className="card-text">
                  Description of Product 2, Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed tristique fringilla ipsum,
                  nec tincidunt turpis elementum nec.
                </p>
                <p className="card-text">Price: $129.99</p>
                <Link className="btn btn-primary" to="/products/2">
                  View Product
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-2">
          <div className="row d-flex">
            <div className="col-md-4">
              <img
                className=""
                src="https://placehold.co/300x300"
                alt="Product 3"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Product 3</h5>
                <p className="card-text">
                  Description of Product 3, Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed tristique fringilla ipsum,
                  nec tincidunt turpis elementum nec.
                </p>
                <p className="card-text">Price: $79.99</p>
                <Link className="btn btn-primary" to="/products/3">
                  View Product
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-2">
          <div className="row d-flex">
            <div className="col-md-4">
              <img
                className=""
                src="https://placehold.co/300x300"
                alt="Product 4"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Product 4</h5>
                <p className="card-text">
                  Description of Product 4, Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed tristique fringilla ipsum,
                  nec tincidunt turpis elementum nec.
                </p>
                <p className="card-text">Price: $49.99</p>
                <Link className="btn btn-primary" to="/products/4">
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
};

export default Products;
