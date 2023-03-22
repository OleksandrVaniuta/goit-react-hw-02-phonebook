import PropTypes from 'prop-types';
import css from './ContactList.module.css';

function ContactsList({ contactData, onDeletContact }) {
  return (
    <ul className={css.list}>
      {contactData.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.item}>
            <p className={css.contact}>
              {name}: {number}
            </p>
            <button
              type="button"
              onClick={() => onDeletContact(id)}
              className={css.button}
            >
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactsList.propTypes = {
  contactData: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeletContact: PropTypes.func.isRequired,
};

export default ContactsList;
