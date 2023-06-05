import PropTypes from 'prop-types';
import { options } from '../../variables';
import css from './DropDownForm.module.css';

const DropDownForm = ({ selected, onChange }) => {
  return (
    <form className={css.selectForm}>
      <select className={css.select} value={selected} onChange={onChange}>
        {Object.keys(options).map(value => (
          <option className={css.option} value={options[value]} key={value}>
            {value}
          </option>
        ))}
      </select>
    </form>
  );
};

DropDownForm.propTypes = {
  selected: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default DropDownForm;
