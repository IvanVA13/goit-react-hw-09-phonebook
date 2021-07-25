import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormControl, InputGroup } from 'react-bootstrap';

import { filterContact, getFilter } from '../../redux/contacts';
import styles from './Filter.module.scss';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onFilter = useCallback(
    e => {
      dispatch(filterContact(e.target.value));
    },
    [dispatch],
  );
  return (
    <InputGroup className={`mb-3 ${styles['input-layout']}`}>
      <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
      <FormControl
        type="text"
        value={value}
        onChange={onFilter}
        placeholder="Name to filter"
        aria-label="Name to filter"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
  );
};

export default Filter;
