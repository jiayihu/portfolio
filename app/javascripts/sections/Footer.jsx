import React from 'react';

export default function Footer() {
  return (
    <footer>
      <p>
        <svg><use xlinkHref="/images/icons.svg#react"></use></svg>
        <svg><use xlinkHref="/images/icons.svg#love"></use></svg>
      </p>
      <p>This website is made with React.js, love and crazy stuff.</p>
      <p className="copy">Giovanni Jiayi Hu © 2016. VAT 01533630297. All rights reserved.</p>
    </footer>
  );
}
