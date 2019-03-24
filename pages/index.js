import Chip from "@material-ui/core/Chip";
import styled from "styled-components";
import { ButtonBasic } from "../components/styles/button";

const MyChip = styled(Chip)`
  && {
    color: red;
  }
`;

const Home = () => {
  return (
    <div>
      <h2>Welcome to next.js!</h2>
      <ButtonBasic>Btn 1</ButtonBasic>
      <ButtonBasic background="#52AA5E">Btn 2</ButtonBasic>
      <MyChip label="Basic Chip" />
    </div>
  );
};

export default Home;
