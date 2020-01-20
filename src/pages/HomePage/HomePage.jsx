import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
// import { Link } from 'react-router-dom';


const HomePage = (props) => {
    return (
        <div>
            <NavBar user={props.user} handleLogout={props.handleLogout} />
            <h3>Tres Commas</h3>
        </div>
    );
};


export default HomePage;