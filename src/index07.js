// render an component into document.
import ReactDOM from 'react-dom';

export default (component, ele, callback = () => {}) => {
  if (typeof ele === 'string') {
    ReactDOM.render(component, document.querySelector(ele), callback);
    return 'string selector';
  }
  ReactDOM.render(component, ele, callback);
  return 'html dom';
};
