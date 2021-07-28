import React, { useState } from 'react';
import Navbar from './Navbar';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import CV from './pages/CV';
import Footer from './pages/Footer';
import Header from './pages/Header';
import Portfolio from './pages/Portfolio';

export default function Content() {
    const [currentPage, setCurrentPage] = useState('About Me');

    const renderPage = () => {
        if (currentPage === 'About Me') {
            return <AboutMe />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'CV') {
            return <CV />;
        }
        return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header />
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );
}