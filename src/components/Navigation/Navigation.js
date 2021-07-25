import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getIsAuthenticated } from '../../redux/auth';
import routes from '../../routes';
import Nav from 'react-bootstrap/Nav';
import styles from './Navigation.module.scss';

const Navigation = () => {
  const isLogIn = useSelector(getIsAuthenticated);
  return (
    <>
      <Nav.Item className={styles['nav-item']}>
        <Nav.Link
          as={Link}
          to={routes.home}
          eventKey={routes.home}
          className={styles['nav-link']}
        >
          Home
        </Nav.Link>
      </Nav.Item>
      {isLogIn && (
        <Nav.Item className={styles['nav-item']}>
          <Nav.Link
            as={Link}
            to={routes.contacts}
            eventKey={routes.contacts}
            className={styles['nav-link']}
          >
            Contacts
          </Nav.Link>
        </Nav.Item>
      )}
    </>
  );
};

export default Navigation;
