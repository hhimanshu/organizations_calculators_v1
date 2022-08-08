import { getCalculator, UserSelection } from "./calculators";

const printOrganizationPledgeDetails = (
  organizationName: string,
  objectiveName: string,
  choices: UserSelection[],
  action: UserSelection
) => {
  const calculator = getCalculator(organizationName, objectiveName);

  if (!calculator) {
    console.error(
      `No calculator found for organization "${organizationName}" and objective "${objectiveName}"`
    );
    return;
  }

  const configurations = calculator.getConfigurations();
  for (let [key, value] of configurations) {
    console.log(key, value);
  }

  const baselineValue = calculator.calculateBaselineValue(choices);
  console.log(`baselineValue=${baselineValue} kg CO2e`);

  const actionValue = calculator.calculateActionValue(action);
  console.log(`actionValue=${actionValue} kg CO2e`);
};

// use case 1: Bain with Plant-forward Diet
printOrganizationPledgeDetails(
  "Bain",
  "PlantForwardDiet",
  [{ key: "Weekly_Red_Meat_Heavy", value: undefined }],
  {
    key: "Weekly_Poulty",
    value: undefined
  }
);

// use case 2: Meta with no Calculator
printOrganizationPledgeDetails("Meta", "PlantForwardDiet", [], {
  key: "none",
  value: undefined
});

// use case 2: Meta with Home Commute Objective
printOrganizationPledgeDetails(
  "Meta",
  "HomeCommute",
  [
    { key: "Work_Location_", value: "office" },
    { key: "Commute_Mileage", value: 30 }
  ],
  { key: "Work_Location_", value: "co-working" }
);
