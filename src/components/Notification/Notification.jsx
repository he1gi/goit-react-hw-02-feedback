import PropTypes from 'prop-types';
import { Message } from './Notification.styled';

export default Notification = ({ message }) => {
  return <Message>{message}</Message>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
