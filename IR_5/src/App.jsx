import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Link } from 'react-router-dom';

// PRD => {
//   -> Requirement = Header, Footer, Home Page, Players Page, PlayerDetails page and report Page.
//   -> We have to create PlayersData site which includes Header and Footer on each page of the site.
//   -> Header or Navbar will include main Company logo and three other pages Home, Players and Report and on click of that it will take us to that particular page.
//   -> Home page includes One player smiling image and below that players div and includes View Players button and on click of that it will take us to players page, and below that there will be team performance div and include button which take us to the report page directly.
//   -> In Players page it includes filter by team filter and on selection of team preferance it will shows only the player of that team only. And below that there will be cards one by one of each player. Card will includes Player name on top and below Position and Team of the player. And there will be one button which take us to playerDetails page of that selected player details in card.
//   -> Report page will include three performance report Top Scorer, Best Assister and Most Valuable Player. We will find top scorer based on highest goal scored, will find best assister by filtering who has the highest assists, and MVP will find by highest rated player.
//   -> Each page will includes responsive nav Or Header and Footer on top and bottom of the each Page.
// }

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <div className="mt-4">
          <img
            src="https://placehold.co/400x300?text=Players+Players"
            alt="Players Players"
          />
        </div>

        <div className="py-4">
          <h2>Our Players</h2>
          <p>
            Meet our talented team of Players who work hard to achieve success
            on the field.
          </p>
          <Link className="btn btn-primary" to="/players">
            View Players
          </Link>
        </div>

        <div className="mb-3">
          <h2>Team Performance</h2>
          <p>
            Explore our team's performance statistics to gain insights into our
            success on the field.
          </p>
          <Link className="btn btn-primary" to="/report">
            View Performance
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
