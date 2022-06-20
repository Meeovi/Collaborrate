import * as TypeGraphQL from "type-graphql";

export enum SegmentsOrderByRelevanceFieldEnum {
  name = "name",
  description = "description",
  website = "website",
  status = "status",
  apply_to = "apply_to",
  customers = "customers"
}
TypeGraphQL.registerEnumType(SegmentsOrderByRelevanceFieldEnum, {
  name: "SegmentsOrderByRelevanceFieldEnum",
  description: undefined,
});
