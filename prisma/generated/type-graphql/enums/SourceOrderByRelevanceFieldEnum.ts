import * as TypeGraphQL from "type-graphql";

export enum SourceOrderByRelevanceFieldEnum {
  name = "name",
  description = "description",
  latitude = "latitude",
  longitude = "longitude",
  contact_name = "contact_name",
  email = "email",
  country = "country",
  state = "state",
  city = "city",
  street = "street"
}
TypeGraphQL.registerEnumType(SourceOrderByRelevanceFieldEnum, {
  name: "SourceOrderByRelevanceFieldEnum",
  description: undefined,
});
