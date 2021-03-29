import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import './index.scss';

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <svg width="121px" height="32px" viewBox="0 0 121 32" fill="none">
          <path
            // className={innerClass}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.023 16.113c8.7 0 15.75 7.051 15.75 15.75V32H15.75C7.05 32 0 24.95 0 16.25v-.137h16.023zm81.793-4.342l3.525 8.526 3.548-8.526h5.923l2.663 3.67 2.731-3.67h3.881l-4.675 6.143 4.857 6.423h-4.138l-2.754-3.85-2.852 3.85h-3.972l4.834-6.325-3.608-4.819-5.076 11.915c-1.203 3.004-2.905 3.927-5.137 3.95h-.076c-1.286 0-2.685-.424-3.502-1.143l1.331-2.595c.56.492 1.332.794 2.058.794 1.006 0 1.566-.446 2.058-1.566l.045-.113-5.447-12.656h3.783v-.008zm-48.923-4.07c5.136 0 8.95 3.57 8.95 8.45 0 1.982-.629 3.745-1.71 5.145l2.572 2.572-2.58 2.572-2.837-2.83c-1.278.643-2.769.999-4.395.999-5.167 0-8.95-3.593-8.95-8.45 0-4.857 3.783-8.458 8.95-8.458zm14.267 4.07v6.559c0 2.103.938 3.034 2.55 3.034 1.68 0 2.897-1.075 2.897-3.39v-6.21h3.646v12.565h-3.457v-1.498c-.96 1.097-2.36 1.68-3.903 1.68-3.155 0-5.371-1.778-5.371-5.651v-7.096h3.638v.007zm15.153 0v12.566h-3.646V11.77h3.646zm10.054-.189c2.965 0 5.212 1.725 5.212 5.56v7.195h-3.646v-6.635c0-2.035-.938-2.965-2.55-2.965-1.755 0-3.01 1.074-3.01 3.389v6.21h-3.647V11.772h3.48v1.468c.984-1.075 2.459-1.657 4.16-1.657zm-39.474-.658c-2.92 0-5.114 2.126-5.114 5.227 0 3.11 2.194 5.228 5.114 5.228s5.114-2.126 5.114-5.228c0-3.101-2.194-5.227-5.114-5.227zM15.826 0c8.806 0 15.947 7.134 15.947 15.932 0 1.4-.181 2.754-.514 4.04-3.7-4.494-9.01-7.323-14.919-7.384H.227C1.763 5.394 8.163 0 15.826 0zM76.55 5.22a2.502 2.502 0 012.504 2.504 2.502 2.502 0 01-2.504 2.504 2.502 2.502 0 01-2.504-2.504A2.502 2.502 0 0176.55 5.22z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
      <Link
        to="/"
        className={classNames('navbar__link', {
          'navbar__link--active': pathname === '/',
        })}>
        Home
      </Link>
      <Link
        to="/flexContainer"
        className={classNames('navbar__link', {
          'navbar__link--active': pathname === '/flexContainer',
        })}>
        Flex Container
      </Link>
      <Link
        to="/flexChildren"
        className={classNames('navbar__link', {
          'navbar__link--active': pathname === '/flexChildren',
        })}>
        Flex Children
      </Link>
      <Link
        to="/nesting"
        className={classNames('navbar__link', {
          'navbar__link--active': pathname === '/nesting',
        })}>
        Nesting
      </Link>
    </div>
  );
};

export default Navbar;
