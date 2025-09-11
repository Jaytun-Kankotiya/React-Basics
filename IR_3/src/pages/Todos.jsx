import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Todos = () => {
  return (
    <>
      <Header />
      <main className="container">
        <h1 className="py-2">Todo List</h1>
        <ul className="list-group mb-4">
          <li className="list-group-item">
            <Link to="/todos/1">Buy Bread</Link>
          </li>
          <li className="list-group-item">
            <Link to="/todos/2">Go for a Walk</Link>
          </li>
          <li className="list-group-item">
            <Link to="/todos/3">Attend Painting class</Link>
          </li>
          <li className="list-group-item">
            <Link to="/todos/4">Buy Flowers</Link>
          </li>
          <li className="list-group-item">
            <Link to="/todos/5">Visit Church</Link>
          </li>
          <li className="list-group-item">
            <Link to="/todos/6">Write Journal</Link>
          </li>
          <li className="list-group-item">
            <Link to="/todos/7">Water the plants</Link>
          </li>
          <li className="list-group-item">
            <Link to="/todos/8">Clean the windows</Link>
          </li>
          <li className="list-group-item">
            <Link to="/todos/9">Buy Gifts for Holi</Link>
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default Todos;
