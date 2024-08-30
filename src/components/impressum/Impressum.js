import React from 'react';
import { FaArrowLeft } from 'react-icons/fa6';

const Impressum = () => {
  return (
    <div className='impressum' id='impressum'>
      <div className='nav-impressum'>
        <a href='/' >
          <FaArrowLeft /> Back to home
        </a>
      </div>
      <div className='impressum-content'>
        <h1>Impressum</h1>
        <p>Angaben gemäß § 5 DDG</p>
        <p>Sandy Hayashi
          <br />
          Langen (Hessen)
          <br />
          63225 Germany
          <br />
        </p>
        <p>
          <strong>Vertreten durch: </strong>
          <br />
          Sandy Hayashi
          <br />
        </p>
        <p>
          <strong>Kontakt:</strong>
          <br />
          E-Mail: <a href='mailto:sandy_hmh2@hotmail.com'>sandy_hmh2 (@) hotmail (DOT) com</a>
          <br />
        </p>
        <br />
        Website Impressum von <a href="https://www.impressum-generator.de" target='_blank' rel="noreferrer">impressum-generator.de</a>
      </div>
    </div>

  );
}

export default Impressum;