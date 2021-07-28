import React from 'react';

import { FaFile } from "react-icons/fa";

import '../styles/CV.css';

const CV = () => {
    return (
        <div className="words">

            <div id="resume">
                <div>
                    <p>My resumé</p>
                </div>
                <a href="https://docs.google.com/document/d/1GPcdC3QdSo6x6p8VsU5gEk_gqqwZcoUTzlcjqj9n8HU/edit?usp=sharing"><FaFile size={30} /></a>
            </div>
        </div>
    );
};

export default CV;