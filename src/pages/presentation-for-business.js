import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

const BusinessPresentationPage = () => (
  <div>
    <Helmet title="For Buisness" />

    <div className="container">
      <iframe
        className="white-paper mt-3 mb-3"
        src="https://drive.google.com/file/d/1sp3XF4zlZL3FvhBwLx6nh7H0bwXh6ROL/preview"
        frameBorder="0"
      />
    </div>
  </div>
);

export default BusinessPresentationPage;
