import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ type, styleType, options, placeholder, ...props }) => {
  let inputElement;

  switch (styleType) {
    case 'default':
      inputElement = <input type={type} className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder={placeholder} {...props} />;
      break;
    case 'paragraph':
      inputElement = <textarea className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder={placeholder} {...props} />;
      break;
    case 'dropdown':
      inputElement = (
        <select className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder={placeholder} {...props}>
          {options && options.map((option, index) => (
            <option key={index} value={option.value}>{option.label}</option>
          ))}
        </select>
      );
      break;
    case 'datepicker':
      inputElement = <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder={placeholder} {...props} />;
      break;
    case 'floating-label':
      inputElement = (
        <div className="relative z-0 w-full mb-5 group">
          <input type={type} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...props} />
          <label htmlFor={props.id} className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            {placeholder}
          </label>
        </div>
      );
      break;
      case 'phonenumber':
        inputElement = (
          <input type='text' className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder={placeholder} />
        )
        break
    default:
      inputElement = <input type={type} className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder={placeholder} {...props} />;
  }

  return (
    <div className="my-2">
      {inputElement}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  styleType: PropTypes.oneOf(['default', 'paragraph', 'dropdown', 'datepicker', 'floating-label']),
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })),
  placeholder: PropTypes.string,
  id: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  styleType: 'default',
  options: [],
}

export default Input;
