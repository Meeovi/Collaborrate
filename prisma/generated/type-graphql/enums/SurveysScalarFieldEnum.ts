import * as TypeGraphQL from "type-graphql";

export enum SurveysScalarFieldEnum {
  id = "id",
  created_at = "created_at",
  name = "name",
  assigned_to = "assigned_to",
  status = "status",
  description = "description",
  question = "question",
  answer = "answer",
  submit_text = "submit_text",
  satisfied_text = "satisfied_text",
  neither_text = "neither_text",
  dissatisfied_text = "dissatisfied_text"
}
TypeGraphQL.registerEnumType(SurveysScalarFieldEnum, {
  name: "SurveysScalarFieldEnum",
  description: undefined,
});
