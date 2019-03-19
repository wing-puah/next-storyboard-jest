import styled from 'styled-components';
import PropTypes from 'prop-types';

const Box = styled.div`
  border: 1px solid ${props => props.color || props.theme.palette.primary};
  padding: 20px;
`;

Box.propTypes = {
  color: PropTypes.string,
};

export default Box;
