import styled from "styled-components";

const StyledScenario = styled.div`
  background-color: #f6f7f7;
  padding: 20px;
  margin-bottom: 40px;
`;
const StyledCheckbox = styled.input``;
const StyledTitle = styled.h3`
  margin-top: 0;
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Scenario = ({ name, steps }) => {
  return (
    <StyledScenario>
      <StyledWrapper>
        {" "}
        <StyledTitle>{name}</StyledTitle>
        <input type="checkbox" />
      </StyledWrapper>

      {steps.map((step) => (
        <p key={step}>{step}</p>
      ))}
    </StyledScenario>
  );
};
