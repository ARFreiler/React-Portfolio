import React from 'react';

import { FaTwitter } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="icons">
                <div className="icon">
                    <a href="https://twitter.com/AshleighFreiler"><FaTwitter size={30} /></a>
                </div>
                <div className="icon">
                    <a href="https://github.com/ARFreiler"><FaGithub size={30} /></a>
                </div>
                <div className="icon">
                    <a href="https://linkedin.com/in/ashleighfreiler"><FaLinkedin size={30} /></a>
                </div>
            </div>
            <p className="copyright">
                RoseAshTech © 2021 LLC. All Rights Reserved
            </p>
        </div >
    )
}

// const element = <FontAwesomeIcon icon={faCoffee} />

// ReactDOM.render(element, document.body)

// const Footer = () => {
//     return (
//         <footer className="footer">
//             <div class="container">
//                 <div class="icons">
//                     <a class="icons" href="https://github.com/ARFreiler"
//                     ><i class="fab fa-github-square fa-3x"></i
//                     ></a>
//                     <a class="icons" href="https://linkedin.com/in/ashleighfreiler"
//                     ><i class="fab fa-linkedin fa-3x"></i
//                     ></a>
//                     <a class="icons" href="https://twitter.com/AshleighFreiler"
//                     ><i class="fab fa-twitter fa-3x"></i
//                     ></a>
//                 </div>
//             </div>
//             <div className="center-text">
//                 <p className="copyright">
//                     RoseAshTech © 2021 LLC. All Rights Reserved
//                 </p>
//             </div>
//         </footer>
//     );
// };

export default Footer;