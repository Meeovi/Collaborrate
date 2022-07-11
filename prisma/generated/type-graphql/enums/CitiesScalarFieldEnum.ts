import * as TypeGraphQL from "type-graphql";

export enum CitiesScalarFieldEnum {
  id = "id",
  name = "name",
  description = "description",
  state = "state",
  country = "country",
  postalCode = "postalCode",
  image = "image"
}
TypeGraphQL.registerEnumType(CitiesScalarFieldEnum, {
  name: "CitiesScalarFieldEnum",
  description: undefined,
});
