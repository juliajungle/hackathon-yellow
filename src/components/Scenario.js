export const Scenario = ({ name, steps }) => {
  return (
    <div>
      <h3>{name}</h3>
      {steps.map((step) => (
        <p>{step}</p>
      ))}
    </div>
  );
};
