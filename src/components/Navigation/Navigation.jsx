import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import styled from 'styled-components';

import routes from '../../routes';
import css from './Navigation.module.css';
import Loader from '../Loader/Loader';

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 24px;
  text-transform: uppercase;
  &.active {
    border-bottom: 2px solid #5cd3a8;
  }
`;

const Navigation = () => {
  return (
    <div className={css.container}>
      <header>
        <nav>
          <ul className={css.menu}>
            <li className={css.menuItem}>
              <StyledLink className={css.navLink} to={routes.HOME}>
                Home
              </StyledLink>
            </li>
            <li className={css.menuItem}>
              <StyledLink className={css.navLink} to={routes.TWEETS}>
                Tweets
              </StyledLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Navigation;
