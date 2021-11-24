import React from 'react';
// import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../../styles.css'
export const CustomChecksBox = ({ type, id, label, name, disable, change, check }) => {
  return (
    <div className='customCheckbox'>
      <div className='customInput'><input
        type={type}
        id={id}
        name={name}
        defaultChecked={check}
      /></div>
      <div className='customInput'>{label}</div>
    </div>
  );
};
CustomChecksBox.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  disable: PropTypes.bool,
  change: PropTypes.func,
  check: PropTypes.bool
};
