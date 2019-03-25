import Link from 'next/link';
import { withRouter } from 'next/router';
import styled from 'styled-components';

import routes from './mockRoutes';

const NavLink = styled.a`
  &.active {
    border-bottom: 2px solid red;
  }
`;

const Navigation = props => {
  const { router } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav">
        {routes.map((_, idx) => {
          return (
            <li className="nav-item px-3" key={idx}>
              <Link href={_.path}>
                <NavLink
                  className={
                    (router.asPath === _.path || router.route === _.path) &&
                    'active'
                  }
                >
                  {_.name}
                </NavLink>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default withRouter(Navigation);
