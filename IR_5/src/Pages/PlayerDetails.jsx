import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { playersData } from './Players';
import { useParams } from 'react-router-dom';

const PlayerDetails = () => {
  const playerId = useParams();

  const selected = playersData.find(
    (player) => player.id === parseInt(playerId.playerId)
  );

  return (
    <>
      <Header />
      <main className="container">
        <h2 className="mt-3">{selected.name}</h2>
        <ul className="list-group mb-3">
          <li className="list-group-item">
            <strong>Name: </strong>
            {selected.name}
          </li>
          <li className="list-group-item">
            <strong>Position: </strong>
            {selected.position}
          </li>
          <li className="list-group-item">
            <strong>Team: </strong>
            {selected.team}
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default PlayerDetails;
