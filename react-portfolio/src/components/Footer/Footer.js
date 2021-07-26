import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FaTwitter } from "react-icons/fa"

import './Footer.css';

const Footer = () => {
    return (
        <div>
            <FaTwitter />
        </div>
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