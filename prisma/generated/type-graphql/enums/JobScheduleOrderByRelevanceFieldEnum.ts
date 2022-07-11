import * as TypeGraphQL from "type-graphql";

export enum JobScheduleOrderByRelevanceFieldEnum {
  objectId = "objectId",
  jobName = "jobName",
  description = "description",
  params = "params",
  startAfter = "startAfter",
  timeOfDay = "timeOfDay",
  rperm = "rperm",
  wperm = "wperm"
}
TypeGraphQL.registerEnumType(JobScheduleOrderByRelevanceFieldEnum, {
  name: "JobScheduleOrderByRelevanceFieldEnum",
  description: undefined,
});
