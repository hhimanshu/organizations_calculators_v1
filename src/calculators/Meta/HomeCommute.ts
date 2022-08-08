import { Calculator, UserSelection } from "..";

export class MetaHomeCommuteCalculator implements Calculator {
  getConfigurations = () => {
    // todo: these could also be saved in database under an API
    // https://api-staging.climateclub.xyz/api/organizations/{id}/calculator/configurations
    return new Map<string, number>([
      ["Working_Days", 201],
      ["Commutes_per_Day", 2]
    ]);
  };

  calculateActionValue = (action: UserSelection) => {
    // todo: add formula
    return 20.11;
  };

  calculateBaselineValue = (choices: UserSelection[]) => {
    // todo: add formula
    return 300.11;
  };
}
