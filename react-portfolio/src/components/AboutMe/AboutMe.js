import React from 'react';

import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className="aboutme">
            <img id="selfie" src="IMG_2073.jpg" alt="Author Portrait"></img>
            <div className="bio">
                <p><span class="first-letter">A</span>shleigh has made a career of always building. In the past she worked with zero energy and green friendly design firms to bring physical construction on par with the technologies and methods now available. She has shifted her focus, and now builds in a new way as a web developer. She brings her passion for solving problems and designing and creating new projects, from concept to reality.
            </p>
                <p>Currently located in Philadelphia, you can find Ashleigh living with her faithful blue nose pittie. She is driven by an insatiable curiousity that requires a constant stream of learning. When not working she is honing her skills, working out, cooking new dishes, and exploring both in the city and out.</p>
            </div>
        </div>
    );
};

export default AboutMe;