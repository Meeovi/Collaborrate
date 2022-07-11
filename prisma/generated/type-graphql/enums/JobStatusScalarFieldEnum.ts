import * as TypeGraphQL from "type-graphql";

export enum JobStatusScalarFieldEnum {
  objectId = "objectId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  jobName = "jobName",
  source = "source",
  status = "status",
  message = "message",
  params = "params",
  finishedAt = "finishedAt",
  rperm = "rperm",
  wperm = "wperm"
}
TypeGraphQL.registerEnumType(JobStatusScalarFieldEnum, {
  name: "JobStatusScalarFieldEnum",
  description: undefined,
});
