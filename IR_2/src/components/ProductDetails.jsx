import Header from '../pages/Header';
import Footer from '../pages/Footer';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const productId = useParams();
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

  const selectedProduct = products.find(
    (product) => product.id === productId.productSequence
  );

  return (
    <>
      <Header />
      <main className="container mb-5">
        <h1 className="py-3">{selectedProduct.name}</h1>
        <div className="mb-3">
          <img src="https://placehold.co/300x200" alt={selectedProduct.name} />
        </div>
        <p>Price: ${selectedProduct.price}</p>
        <p>Description: {selectedProduct.description}</p>
        <p>Available Colors: {selectedProduct.availableColors.join(', ')}</p>
        <p>
          Return Policy:{' '}
          {selectedProduct.isReturnApplicable
            ? 'Return applicable within 7 days'
            : 'Return not applicable for this product'}
        </p>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetails;
