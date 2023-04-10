import React from 'react';
import Logo from '../components/Logo';
import Menu from '../components/Menu';
import "../components/style/Home.css";

const Home = () => {
    return (
        <div class="background">
            <Logo />
            <Menu />
        </div>

    );
};

export default Home;