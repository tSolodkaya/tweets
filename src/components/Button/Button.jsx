import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ handleClick }) => {
  return (
    <div className={css.container}>
      <button className={css.loadMoreBtn} type="button" onClick={handleClick}>
        Load More
      </button>
    </div>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
export default Button;
