## Things to do

- [ ] Create Organization to Objective Mappings. Each mapping should have a name. This name is unique to (organization, objective). This name is used in the code to fetch the correct calculator for a given organization and objective. This should be achieved by schema changes followed by a new API that allows the CRUD functionality for this association.

- [ ] Create new calculator based on the organization and objective. This includes implementing 3 methods as defined in the prototype.

- [ ] Create a new API that fetches the calculated value for a given organization and objective.

```
POST /organizations/{orgId}/objectives/{objectiveId}/baseline
```

This API should fetch the correct calculator for a given organization, objective calculation, invoke the `calculateBaselineValue` and return to the caller. This API should take an array of `key/value` pairs. The keys should be associated with the labels as defined in [google doc](https://docs.google.com/document/d/1JGitet_TFi5g6V-P1u-2H8hS3C1n-qmYRoCeWCwIVnQ/edit#). This is to ensure that the keys are infact used in the calculation on the backend.

- [ ] Merge the above code (if agreed upon) with the `backend` repository.
- [ ] Write the actual calculations as modeled in the spreadsheet. This is for both baseline and recorded action values.
- [ ] Refactor backend api that records action to fetch the correct calculator and invoke `calculateActionValue`. Then, used this value, instead of current addition logic in `pledge.activity` table.
- [ ] Refactor front-end to call the above newly created API to get baseline value instead of addinng the points associated in `AssessmentQuestionOption`.
- Additionally, we must create a new API to keep organization-objective specific configuration in the database, so that values changes does not require engineering effort. This new API could be

```
POST /organizations/{id}/objectives/{objectiveId}/calculator/configurations
```
