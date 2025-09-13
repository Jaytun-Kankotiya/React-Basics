import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { playersData } from './Players';

const Report = () => {
  const topScorer = playersData.reduce((acc, curr) =>
    acc.goal > curr.goal ? acc : curr
  );

  const bestAssister = playersData.reduce((acc, curr) =>
    acc.assists > curr.assists ? acc : curr
  );

  const valuablePlayer = playersData.reduce((acc, curr) =>
    acc.rating > curr.rating ? acc : curr
  );
  return (
    <>
      <Header />
      <main className="container">
        <h1 className="mt-3">Team Performance Report</h1>
        <hr />

        <div className="row py-2">
          <div className="col">
            <div>
              <h5>Top Scorer</h5>
              <p>Name: {topScorer.name}</p>
              <p>Goals Scored: {topScorer.goal}</p>
            </div>
          </div>

          <div className="col">
            <div>
              <h5>Best Assister</h5>
              <p>Name: {bestAssister.name}</p>
              <p>Goals Scored: {bestAssister.assists}</p>
            </div>
          </div>

          <div className="col">
            <div>
              <h5>Most Valuable Player (MVP)</h5>
              <p>Name: {valuablePlayer.name}</p>
              <p>Goals Scored: {valuablePlayer.rating}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Report;
