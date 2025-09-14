import { useState } from 'react';
import './App.css';
import useFetch from './useFetch';
import 'bootstrap/dist/css/bootstrap.min.css';

// PRD => {
//   - Fetch random three people data from an API
//   - three card on each row
//   - card includes pictue on the top and user details like name, age, gender, username and email on the bottom of the card
//   - once data fetched show more will appear and on click of that more data like phone number and Full address will appear on the bottom of the user details.
//   - Once data fetched button turns in Show less Info and again on click of that phone number and full address will be hide.
// }

function App() {
  const [showMore, setShowMore] = useState(false);
  const { data, loading, error, fetchData } = useFetch(
    ' https://randomuser.me/api/?results=3'
  );

  const renderData = () => {
    setShowMore((prevData) => !prevData);
  };

  return (
    <>
      <div className="container">
        <h1>People Directory</h1>
        <button onClick={fetchData} className="btn btn-primary mt-2 mb-3">
          Get People
        </button>
        {loading && <p>Loading...</p>}
        {error && <p>People directory not found.</p>}

        {data && (
          <div>
            <div className="row">
              <>
                {data.results.map((user) => (
                  <>
                    <div className="col-md-4 ">
                      <div className="card">
                        <img
                          className="card-img-top"
                          src={user.picture.large}
                          alt="User"
                        />
                        <div className="card-body">
                          <h5>
                            {user.name.first} {user.name.last}
                          </h5>
                          <p>Age: {user.dob.age}</p>
                          <p>Gender: {user.gender}</p>
                          <p>Username: {user.login.username}</p>
                          <p>Email: {user.email}</p>
                          {showMore && (
                            <>
                              <p>Phone Number: {user.phone}</p>
                              <p>
                                Full Address: {user.location.street.number},{' '}
                                {user.location.street.name},{' '}
                                {user.location.city}, {user.location.state},{' '}
                                {user.location.state}, {user.location.country},{' '}
                                {user.location.postcode}.
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </>
            </div>
            <div className="text-center py-3">
              {data && (
                <button className="btn btn-primary" onClick={renderData}>
                  {showMore ? 'Show Less Info' : 'Show More Info'}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
