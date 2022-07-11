import * as TypeGraphQL from "type-graphql";

export enum JobStatusOrderByRelevanceFieldEnum {
  objectId = "objectId",
  jobName = "jobName",
  source = "source",
  status = "status",
  message = "message",
  rperm = "rperm",
  wperm = "wperm"
}
TypeGraphQL.registerEnumType(JobStatusOrderByRelevanceFieldEnum, {
  name: "JobStatusOrderByRelevanceFieldEnum",
  description: undefined,
});
