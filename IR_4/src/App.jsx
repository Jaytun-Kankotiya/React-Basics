import { use, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const posts = [
    {
      id: 1,
      username: 'john_doe',
      imgUrl: 'https://placehold.co/400x200?text=Hello+World',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      username: 'jane_smith',
      imgUrl: 'https://placehold.co/400x200?text=Smiling+Jane',
      content:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      username: 'alice_wonder',
      imgUrl: 'https://placehold.co/400x200?text=Alice+In+Wonder+Park',
      content:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];

  const profileData = posts.map((user) => {
    return (
      <>
        <div key={user.id}>
          <ul className="list-group">
            <li className="list-group-item d-flex flex-column align-items-start">
              <Link to={`user/${user.username}`}>{user.username}</Link>
              <img src={user.imgUrl} alt="John Doe" />
              <p>{user.content}</p>
            </li>
          </ul>
        </div>
      </>
    );
  });

  return (
    <>
      <Header />
      <main className="container mb-3">
        <h1 className="py-2">Posts</h1>
        {profileData}
      </main>
      <Footer />
    </>
  );
}

export default App;
