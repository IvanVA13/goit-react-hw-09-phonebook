import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Image } from 'react-bootstrap';

import { getUserName, LogOut } from '../../redux/auth';
import avatar from './ivanv.png';
import styles from './UserMenu.module.scss';

const UserMenu = () => {
  const name = useSelector(getUserName);
  const dispatch = useDispatch();
  const onLogOut = useCallback(() => {
    dispatch(LogOut());
  }, [dispatch]);

  return (
    <div className={styles['auth-container']}>
      <Image roundedCircle width="30" height="30" src={avatar} alt={name} />
      <span className={styles.user}> Welcome, {name}</span>
      <Button variant="outline-primary" type="button" onClick={onLogOut}>
        Logout
      </Button>
    </div>
  );
};

export default UserMenu;
