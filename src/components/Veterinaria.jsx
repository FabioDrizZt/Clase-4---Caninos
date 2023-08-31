import styled from "styled-components";
import CaninoInfo from "./CaninoInfo";

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  margin: 10px 0;
  width: 200px;
`;

const Veterinaria = ({ Caninos }) => {
  return (
    <List>
      {Caninos.map((canino) => (
        <ListItem key={canino.id}>
          <CaninoInfo canino={canino} />
        </ListItem>
      ))}
    </List>
  );
};

export default Veterinaria;

