import React from 'react';
import '../HomePage/HomePage.css';
import Scooter from "../../components/Scooter/Scooter"

const HomePage = ({ test }) => {
  return (
    <div>
      <h3>HOME PAGE</h3>
      <Scooter />
  <p>
  {test}
  </p>
    </div>
  );

};

export default HomePage;