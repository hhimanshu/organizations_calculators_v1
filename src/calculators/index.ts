import { BainPlanForwardDietCalculator } from "./Bain/PlantForwardDiet";
import { MetaHomeCommuteCalculator } from "./Meta/HomeCommute";

export type UserSelection = {
  /**
   * - Comes from labels defined in google doc
   * - These labels could be different for each objective
   */
  key: string;

  /**
   * Sometimes only the key matters in calculation, so the value is not needed
   * and hence undefined
   */
  value: boolean | number | string | undefined;
};

export interface Calculator {
  getConfigurations: () => Map<String, number>;
  calculateActionValue: (action: UserSelection) => number;
  calculateBaselineValue: (choices: UserSelection[]) => number;
}

/**
 * This mapping will evolve as new organizations
 * and corresponding objectives are added
 */
export const getCalculator = (
  organizationName: string,
  pledgeName: string
): Calculator | undefined => {
  switch (organizationName) {
    case "Bain":
      if (pledgeName === "PlantForwardDiet") {
        return new BainPlanForwardDietCalculator();
      }
      break;
    case "Meta":
      if (pledgeName === "HomeCommute") {
        return new MetaHomeCommuteCalculator();
      }
  }
  return undefined;
};
