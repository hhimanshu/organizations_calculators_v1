import { Calculator, UserSelection } from "..";

export class BainPlanForwardDietCalculator implements Calculator {
  getConfigurations = () => {
    // todo: these could also be saved in database under an API
    // https://api-staging.climateclub.xyz/api/organizations/{id}/calculator/configurations
    return new Map<string, number>([
      ["Num_Weekly_Expensed_Meals", 4],
      ["NUM_WEEKS", 12],
      ["Emission_Factor_Red_Meat", 7.19],
      ["Emission_Factor_Poultry_Fish", 4.67],
      ["Emission_Factor_Vegetarian", 3.81],
      ["Emission_Factor_Vegan", 2.89]
    ]);
  };

  calculateActionValue = (action: UserSelection) => {
    // todo: add formula
    return 11.79;
  };

  calculateBaselineValue = (choices: UserSelection[]) => {
    // todo: add formula
    return 141.3;
  };
}
