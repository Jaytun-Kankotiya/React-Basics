import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Profile = () => {
  const { username } = useParams();
  const userData = {
    john_doe: {
      fullName: 'John Doe',
      bio: 'Software Developer | Tech Enthusiast',
      imageUrl: 'https://placehold.co/250',
      followers: 1000,
      following: 500,
      posts: 50,
    },
    jane_smith: {
      fullName: 'Jane Smith',
      bio: 'Graphic Designer | Nature Lover',
      imageUrl: 'https://placehold.co/250',
      followers: 800,
      following: 300,
      posts: 40,
    },
    alice_wonder: {
      fullName: 'Alice Wonder',
      bio: 'Travel Blogger | Foodie',
      imageUrl: 'https://placehold.co/250',
      followers: 1200,
      following: 600,
      posts: 60,
    },
  };

  const user = userData[username];
  console.log(user);

  return (
    <>
      <Header />
      <div className="container py-3">
        <div className="card py-3">
          <div className="row d-flex ">
            <div className="col-md-4 d-flex align-items-center">
              <img
                className="mx-5 rounded"
                src={user.imageUrl}
                alt={`${user.fullName}`}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h1>{user.fullName}</h1>
                <p>@{user.fullName.toLowerCase().split(' ').join('_')}</p>
                <p>{user.bio}</p>
                <p>Followers: {user.followers}</p>
                <p>Following: {user.following}</p>
                <p>Posts: {user.posts}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Profile;
