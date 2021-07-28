import React from 'react';

import '../styles/Portfolio.css';

const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className="container">
                <h1 id="portfolio">Portfolio</h1>
                <div className="project">
                    <h2>Weather Tracker</h2>
                    <p id="ptag">Allows a user to enter a city's name and get the current weather conditions plus a five day forecast. Weather conditions are accompanied by icons and color coding. The application allows the user to see previously searched locations with just a click.</p>
                    <img src="WT.jpg" alt="Weather Tracker Homepage" />
                    <div className="link">
                        <a id="site-link" href="https://arfreiler.github.io/Weather-Tracker/"> Visit the Weather Tracker</a>
                    </div>
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
                    <h2>Daily Planner</h2>
                    <p>The Daily Planner is a simple calendar application that allows users to save eventd for each hour of the work day. The timeblocks are color coded to represent the hour as past, present, or future.</p>
                    <img src="DP.jpg" alt="Daily Planner Homepage" />
                    <a href="https://arfreiler.github.io/Daily-Planner/">Visit the Daily Planner</a>
                </div>
                <div className="project">
                    <h2>JavaScript Quiz</h2>
                    <p>JavaScript Quiz is an introduction to JavaScript application. This applicatio has dynamically generated elements, is responsive, and stores a users stats in local storage.</p>
                    <img src="JQ.jpg" alt="JavaScript Quiz Homepage" />
                    <a href="https://arfreiler.github.io/JavaScript-Quiz/">Visit the JavaScript Quiz</a>
                </div>
                <div className="project">
                    <h2>Personal Portfolio</h2>
                    <p>This is the inital personal portfolio application build prior to the introduction of React.js. The portfolio is built strictly with HTML, CSS, and vanilla JavaScript.</p>
                    <img src="PP.jpg" alt="Personal Portfolio Homepage" />
                    <a href="https://arfreiler.github.io/Personal-Portfolio/">Visit the Personal Portfolio</a>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;