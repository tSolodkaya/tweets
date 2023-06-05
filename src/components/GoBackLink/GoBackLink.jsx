import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './GoBackLink.module.css';

const GoBackLink = ({ location }) => {
  return (
    <Link className={css.goBackLink} to={location}>
      Go back
    </Link>
  );
};

GoBackLink.propTypes = {
  location: PropTypes.string.isRequired,
};

export default GoBackLink;
