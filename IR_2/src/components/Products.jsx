import Footer from '../pages/Footer';
import Header from '../pages/Header';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      id: '1',
      name: 'Product 1',
      description:
        'This is Description of Product 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 99.99,
      availableColors: ['Red', 'Blue', 'Green'],
      isReturnApplicable: true,
      productImageUrl: 'https://via.placeholder.com/300x200',
    },
    {
      id: '2',
      name: 'Product 2',
      description:
        'This is Description of Product 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 129.99,
      availableColors: ['White', 'Black'],
      isReturnApplicable: true,
      productImageUrl: 'https://via.placeholder.com/300x200',
    },
    {
      id: '3',
      name: 'Product 3',
      description:
        'This is Description of Product 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 79.99,
      availableColors: ['Yellow'],
      isReturnApplicable: false,
      productImageUrl: 'https://via.placeholder.com/300x200',
    },
    {
      id: '4',
      name: 'Product 4',
      description:
        'This is Description of Product 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 49.99,
      availableColors: ['Purple', 'Yellow'],
      isReturnApplicable: true,
      productImageUrl: 'https://via.placeholder.com/300x200',
    },
  ];

  const filteredProducts = products.filter((product) => product.price < 80);

  const affordable = filteredProducts.map((item) => {
    return (
      <>
        <main>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
        </main>
      </>
    );
  });

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
      <div className="container">
        <hr />
        <h2>Affordable Products</h2>
        {affordable}
      </div>
      <Footer />
    </>
  );
};

export default Products;
