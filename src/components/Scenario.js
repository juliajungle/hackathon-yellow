import styled from "styled-components";

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
    <div>
      <StyledWrapper>
        {" "}
        <StyledTitle>{name}</StyledTitle>
        <input type="checkbox" />
      </StyledWrapper>

      {steps.map((step) => (
        <p key={step}>{step}</p>
      ))}
    </div>
  );
};
