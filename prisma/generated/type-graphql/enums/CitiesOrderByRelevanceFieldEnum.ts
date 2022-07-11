import * as TypeGraphQL from "type-graphql";

export enum CitiesOrderByRelevanceFieldEnum {
  name = "name",
  description = "description",
  state = "state",
  country = "country",
  postalCode = "postalCode",
  image = "image"
}
TypeGraphQL.registerEnumType(CitiesOrderByRelevanceFieldEnum, {
  name: "CitiesOrderByRelevanceFieldEnum",
  description: undefined,
});
