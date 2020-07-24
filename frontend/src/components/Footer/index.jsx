import React from 'react';
import { FaHeart, FaCode } from 'react-icons/fa';


import './styles.css'

const Footer = () => {
  return (
    <footer>
      <div className="sign">
        <p>< FaCode /> with < FaHeart /> by <a href="https://mafda.github.io/"
          target="blank">mafda</a></p>
      </div>
    </footer>
  );
};

export default Footer;