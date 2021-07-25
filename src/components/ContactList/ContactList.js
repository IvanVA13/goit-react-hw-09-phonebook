import PropTypes from 'prop-types';
import { useEffect, useCallback } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import {
  delContact,
  fetchContacts,
  getVisibleContacts,
} from '../../redux/contacts';
import styles from './ContactList.module.scss';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelContact = useCallback(
    id => () => dispatch(delContact(id)),
    [dispatch],
  );
  return (
    contacts.length !== 0 && (
      <ul className={styles['contacts-list']}>
        {contacts.map(({ name, number, id }) => {
          return (
            <li className={styles['contacts-list-item']} key={id}>
              <Card>
                <Card.Header>Name: {name}</Card.Header>
                <Card.Body>
                  <Card.Title>Phone number</Card.Title>
                  <Card.Text>{number}</Card.Text>
                  <Button
                    variant="outline-danger"
                    onClick={handleDelContact(id)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </li>
          );
        })}
      </ul>
    )
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactList;
