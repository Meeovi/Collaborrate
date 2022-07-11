import * as TypeGraphQL from "type-graphql";

export enum CountriesScalarFieldEnum {
  id = "id",
  name = "name",
  description = "description",
  image = "image",
  region = "region"
}
TypeGraphQL.registerEnumType(CountriesScalarFieldEnum, {
  name: "CountriesScalarFieldEnum",
  description: undefined,
});
