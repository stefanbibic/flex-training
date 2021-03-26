import React from 'react';

import './index.scss';

const Home = () => {
  return (
    <header className="home">
      <svg className="home__logo" viewBox="0 0 24 24" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.076 12.084c4.929 0 8.924 3.975 8.924 8.88v.076h-9.076C6.995 21.04 3 17.064 3 12.16v-.076h9.076zM11.965 3C16.955 3 21 7.02 21 11.98a8.94 8.94 0 01-.293 2.279c-2.097-2.532-5.106-4.13-8.453-4.162H3.129C4.026 5.955 7.707 2.999 11.965 3z"
          fill="#004851"
        />
      </svg>
      <h1>Flex training</h1>
    </header>
  );
};

export default Home;
