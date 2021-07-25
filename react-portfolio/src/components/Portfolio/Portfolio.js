import React from 'react';

const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className="container">
                <h1>Portfolio</h1>
                <div className="project">
                    <h2>Weather Tracker</h2>
                    <p>Allows a user to enter a city's name and get the current weather conditions plus a five day forecast. Weather conditions are accompanied by icons and color coding. The application allows the user to see previously searched locations with just a click.</p>
                    <img src="WT.jpg" alt="Weather Tracker Homepage" />
                    <a href="https://arfreiler.github.io/Weather-Tracker/">Weather Tracker</a>
                </div>
                <div className="project">
                    <h2>Password Generator</h2>
                    <p>Allows users working with sensitive materials to generate a random password to better protect their resources. The user has the ability to select included characters and to designate the length of the password.</p>
                    <img src="PG.jpg" alt="Password Generator Homepage" />
                    <a href="https://arfreiler.github.io/Password_Generator/">Password Generator</a>
                </div>
                <div className="project">
                    <h2>Recipe Box</h2>
                    <p>Recipe Box is an application that allows a user to input a desired meal choice with the expected result of a recipe for said meal. The recipe will be accompanied by an image that corresponds to the meal choice.</p>
                    <img src="RB.jpg" alt="Recipe Box Homepage" />
                    <a href="https://arfreiler.github.io/Recipe-Box/">Recipe Box</a>
                </div>
                <div className="project">
                    <h2>Title</h2>
                    <p>Description</p>
                    <img src="" alt="" />
                    <a href="">Placeholder</a>
                </div>
                <div className="project">
                    <h2>Title</h2>
                    <p>Description</p>
                    <img src="" alt="" />
                    <a href="">Placeholder</a>
                </div>
                <div className="project">
                    <h2>Title</h2>
                    <p>Description</p>
                    <img src="" alt="" />
                    <a href="">Placeholder</a>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;