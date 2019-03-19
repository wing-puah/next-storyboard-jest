import styled from 'styled-components';
import { Button } from 'reactstrap';

const ButtonBasic = styled(Button)`
  background: ${props => props.background || props.theme.palette.primary};
`;

export { ButtonBasic };
