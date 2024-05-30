import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ type, styleType, options, ...props }) => {
  let inputElement

  switch (styleType) {
    case 'default':
      inputElement = <input type={type} className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600" {...props} />;
      break;
    case 'paragraph':
      inputElement = <textarea className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-600" {...props} />;
      break;
    case 'bottom-border':
      inputElement = <input type={type} className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-600" {...props} />;
      break;
    case 'dropdown':
      inputElement = (
        <select className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600" {...props}>
          {options && options.map((option, index) => (
            <option key={index} value={option.value}>{option.label}</option>
          ))}
        </select>
      );
      break
    case 'datepicker':
      inputElement = <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600" {...props} />;
      break;
    default:
      inputElement = <input type={type} className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600" {...props} />;
  }

  return (
    <div className="my-2">
      {inputElement}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  styleType: PropTypes.oneOf(['default', 'paragraph', 'bottom-border', 'dropdown', 'datepicker', 'email']),
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })),
};

Input.defaultProps = {
  type: 'text',
  styleType: 'default',
  options: [],
}

export default Input
