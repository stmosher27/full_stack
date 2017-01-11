import React from 'react';

const Footer = () => {
  return(
    <div className='footer'>
      <div className="footer-details">
        <a href="https://github.com/stmosher27"><img className="git-img" src='https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-256.png' alt='Github'/></a>
      </div>
      <div className='footer-details'>
        <a href="https://www.linkedin.com/in/scott-mosher-b92367130?trk=nav_responsive_tab_profile"><img className="linked-img" src="https://lh3.googleusercontent.com/00APBMVQh3yraN704gKCeM63KzeQ-zHUi5wK6E9TjRQ26McyqYBt-zy__4i8GXDAfeys=w300" alt="linkedin"></img></a>
      </div>
      <div className="footer-details">
        © Trailgram
      </div>
    </div>
  );
};

export default Footer;
