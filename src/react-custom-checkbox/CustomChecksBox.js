import React from 'react';
// import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const CustomChecksBox = ({ type, id, label, name, disable, change, check }) => {
  return (
    <div style={{
      // width:'fit-content'
      display:'flex',
      width:'fix-content',
    }}>
       <div><input
        type={type}
        id={id}
        name={name}
        defaultChecked={check}
        /></div>
        <div>{label}</div>
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
export default CustomChecksBox;
