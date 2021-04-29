import { Scenario } from "./Scenario";
import styled from "styled-components";

const StyledFeatureTitle = styled.div`
  font-size: 32px;
  padding: 0;
  margin: 0;
  background-color: #51ddb4;

  h3 {
    position: relative;
    top: -23px;
    right: 11px;
  }
`;

export const Feature = ({ name, userStory, scenarios }) => {
  console.log({ scenarios });
  return (
    <div>
      <StyledFeatureTitle>
        <h3>{name}</h3>
      </StyledFeatureTitle>

      <p>{userStory}</p>
      {scenarios.map(({ scenarioName, scenarioSteps }) => {
        return (
          <Scenario
            key={scenarioName}
            name={scenarioName}
            steps={scenarioSteps}
          />
        );
      })}
    </div>
  );
};
