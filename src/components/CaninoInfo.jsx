import styled from "styled-components";

const InfoContainer = styled.div`
  background-color: #f4f4f4;
  padding: 10px;
  margin: 10px 0;
`;
const InfoHeading = styled.h2`
  font-size: 1.5rem;
`;
const InfoParagraph = styled.p`
  margin: 5px 0;
`;

const CaninoInfo = ({ canino }) => {
  return (
    <InfoContainer>
      <InfoHeading>nombre: {canino.nombre}</InfoHeading>
      <InfoParagraph>Edad: {canino.edad}</InfoParagraph>
      <InfoParagraph>Sexo: {canino.sexo}</InfoParagraph>
      <InfoParagraph>raza: {canino.raza}</InfoParagraph>
      <InfoParagraph>tamaño: {canino.tamaño}</InfoParagraph>
    </InfoContainer>
  );
};

export default CaninoInfo;
