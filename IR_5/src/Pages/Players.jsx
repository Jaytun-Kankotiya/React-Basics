import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const playersData = [
  {
    id: 1,
    name: 'Lionel Messi',
    position: 'Forward',
    team: 'Barcelona',
    goal: 25,
    assists: 10,
    rating: 8.5,
  },
  {
    id: 2,
    name: 'Cristiano Ronaldo',
    position: 'Forward',
    team: 'Manchester United',
    goal: 20,
    assists: 5,
    rating: 9.5,
  },
  {
    id: 3,
    name: 'Neymar Jr',
    position: 'Forward',
    team: 'Paris Saint-Germain',
    goal: 15,
    assists: 15,
    rating: 7,
  },
  {
    id: 4,
    name: 'Kylian Mbappé',
    position: 'Forward',
    team: 'Paris Saint-Germain',
    goal: 22,
    assists: 7,
    rating: 7.5,
  },
  {
    id: 5,
    name: 'Robert Lewandowski',
    position: 'Forward',
    team: 'Bayern Munich',
    goal: 10,
    assists: 11,
    rating: 6,
  },
];

const Players = () => {
  const [filter, setFilter] = useState('All');

  const selectedFilter =
    filter === 'All'
      ? playersData
      : playersData.filter((player) => player.team === filter);

  return (
    <>
      <Header />
      <main className="container">
        <h1 className="mt-3">List of Players</h1>

        <label htmlFor="selectTeam" className="mt-2">
          Filter by Team:
        </label>
        <select
          id="selectTeam"
          className="form-control"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All" defaultValue>
            All Teams
          </option>
          <option value="Barcelona">Barcelona</option>
          <option value="Manchester United">Manchester United</option>
          <option value="Paris Saint-Germain">Paris Saint-Germain</option>
          <option value="Bayern Munich">Bayern Munich</option>
        </select>

        <div className="py-3">
          {selectedFilter.map((player) => (
            <>
              <div key={player.id}>
                <div className="card ">
                  <div className="card-body">
                    <div>
                      <h5>{player.name}</h5>
                      <p>Position: {player.position}</p>
                      <p>Team: {player.team}</p>
                      <Link
                        className="btn btn-primary"
                        to={`/playersdetails/${player.id}`}
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Players;
