import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteAction } from 'redux/contactsSlice';
import css from './ContactListItem.module.css';

export function ContactListItem({ name, number, btnId }) {
  const dispatch = useDispatch();
  const deleteContacts = e => {
    dispatch(deleteAction(e.target.id));
  };

  return (
    <li className={css.listSt}>
      {name}: <span>{number} </span>
      <button id={btnId} onClick={deleteContacts} className={css.btnDelete}>
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  btnId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  
};
