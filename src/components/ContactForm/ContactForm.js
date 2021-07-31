import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

import { useSelector, useDispatch } from 'react-redux';

import { getItems, addContactTest } from '../../redux/contacts';
import styles from './ContactForm.module.scss';

import React from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getItems);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        console.warn(`This ${name} not support`);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    contacts.find(contact => contact.name === name)
      ? alert(`${name} is already in contacts`)
      : // : dispatch(addContact(name, number));
        dispatch(addContactTest({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form className={styles.form} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          autoComplete="off"
          required
          placeholder="Enter name"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Number</Form.Label>
        <Form.Control
          onChange={handleChange}
          type="number"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          autoComplete="off"
          required
          placeholder="Enter phone number"
        />
      </Form.Group>
      <Button variant="outline-primary" type="submit">
        Add contact
      </Button>
    </Form>
  );
};

export default ContactForm;
