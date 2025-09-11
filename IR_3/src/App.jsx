import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main className="container text-center mt-5">
        <img
          src="https://img.freepik.com/free-photo/time-organization-concept-close-up_23-2149046744.jpg?ga=GA1.1.1879053311.1745114762&semt=ais_hybrid&w=740"
          alt="TodoList"
        />
        <div className="py-3">
          <h1 className="py-2">Todo List</h1>
          <p>Welcome to the Todo application!</p>
          <Link className="btn btn-primary" to="/todos">
            View Todos
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
