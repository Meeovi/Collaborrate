import * as TypeGraphQL from "type-graphql";

export enum JobScheduleScalarFieldEnum {
  objectId = "objectId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  jobName = "jobName",
  description = "description",
  params = "params",
  startAfter = "startAfter",
  daysOfWeek = "daysOfWeek",
  timeOfDay = "timeOfDay",
  lastRun = "lastRun",
  repeatMinutes = "repeatMinutes",
  rperm = "rperm",
  wperm = "wperm"
}
TypeGraphQL.registerEnumType(JobScheduleScalarFieldEnum, {
  name: "JobScheduleScalarFieldEnum",
  description: undefined,
});
