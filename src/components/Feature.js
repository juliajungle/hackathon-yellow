import { Scenario } from "./Scenario";

export const Feature = ({ name, userStory, scenarios }) => {
  console.log({ scenarios });
  return (
    <div>
      <h3>{name}</h3>
      <p>{userStory}</p>
      {scenarios.map(({ scenarioName, scenarioSteps }) => {
        return <Scenario name={scenarioName} steps={scenarioSteps} />;
      })}
    </div>
  );
};
