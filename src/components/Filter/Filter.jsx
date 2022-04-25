import PropTypes from 'prop-types';
import { FilterLable, FilterField } from './Filter.Styled';

export const Filter = ({ value, onChange }) => {
  return (
    <form autoComplete="off">
      <FilterLable htmlFor="filter">Find contact by name</FilterLable>
      <FilterField type="text" onChange={onChange} value={value} id="filter" />
    </form>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
