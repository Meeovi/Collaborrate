import * as TypeGraphQL from "type-graphql";

export enum PushStatusScalarFieldEnum {
  objectId = "objectId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  pushTime = "pushTime",
  source = "source",
  query = "query",
  payload = "payload",
  title = "title",
  expiry = "expiry",
  expiration_interval = "expiration_interval",
  status = "status",
  numSent = "numSent",
  numFailed = "numFailed",
  pushHash = "pushHash",
  errorMessage = "errorMessage",
  sentPerType = "sentPerType",
  failedPerType = "failedPerType",
  sentPerUTCOffset = "sentPerUTCOffset",
  failedPerUTCOffset = "failedPerUTCOffset",
  count = "count",
  rperm = "rperm",
  wperm = "wperm"
}
TypeGraphQL.registerEnumType(PushStatusScalarFieldEnum, {
  name: "PushStatusScalarFieldEnum",
  description: undefined,
});
