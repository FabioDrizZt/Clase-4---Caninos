import Veterinaria from "./components/Veterinaria";
import Caninos from "./data";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 2rem;
`;

function App() {
  return (
    <>
      <Title>Clientes caninos de Veterinaria</Title>
      <Veterinaria Caninos={Caninos} />
    </>
  );
}

export default App;
