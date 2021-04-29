import { Feature } from "./Feature";

// In future this component would map over each feature but for now we just have one

export const Results = ({ data }) => {
  const { featureName, userStory, scenarios } = data;
  return (
    <div>
      <Feature name={featureName} userStory={userStory} scenarios={scenarios} />
    </div>
  );
};
