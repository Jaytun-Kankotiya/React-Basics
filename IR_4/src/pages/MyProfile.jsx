import Header from '../components/Header';
import Footer from '../components/Footer';

const MyProfile = () => {
  const [data] = [
    {
      fullName: 'Jaytun Kankotiya',
      userName: 'jaytun_kankotiya',
      bio: 'Software Developer | Tech Enthusiast',
      imgUrl: 'https://placehold.co/250',
      followers: 1000,
      following: 500,
      posts: 50,
    },
  ];

  return (
    <>
      <Header />
      <div className="container py-3">
        <div className="card py-3">
          <div className="row d-flex ">
            <div className="col-md-4 d-flex align-items-center">
              <img
                className="mx-5 rounded-circle"
                src={data.imgUrl}
                alt="Loading..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h1>{data.fullName}</h1>
                <p>@{data.userName}</p>
                <p>{data.bio}</p>
                <p>Followers: {data.followers}</p>
                <p>Following: {data.following}</p>
                <p>Posts: {data.posts}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyProfile;
