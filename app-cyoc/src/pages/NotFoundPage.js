import React from 'react';
import notFoundGif from '../assets/videos/404.gif';
import '../assets/styles/NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <img src={notFoundGif} alt="Error 404" />
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFoundPage;
