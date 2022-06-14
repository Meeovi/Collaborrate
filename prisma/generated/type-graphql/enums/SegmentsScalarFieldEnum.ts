import * as TypeGraphQL from "type-graphql";

export enum SegmentsScalarFieldEnum {
  id = "id",
  created_at = "created_at",
  name = "name",
  description = "description",
  website = "website",
  status = "status",
  apply_to = "apply_to",
  customers = "customers"
}
TypeGraphQL.registerEnumType(SegmentsScalarFieldEnum, {
  name: "SegmentsScalarFieldEnum",
  description: undefined,
});
