import React from 'react';
import Feedback from './Feedback/Feedback';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import OurWorks from './OurWorks/OurWorks';
import Services from './Services/Services';
import Sponsors from './Sponsors/Sponsors';

const Home = () => {
    return (
        <div>
            <Header/>
            <Sponsors/>
            <Services/>
            <OurWorks/>
            <Feedback/>
            <Footer/>
        </div>
    );
};

export default Home;