import * as TypeGraphQL from "type-graphql";

export enum StatesScalarFieldEnum {
  id = "id",
  name = "name",
  description = "description",
  country = "country",
  image = "image"
}
TypeGraphQL.registerEnumType(StatesScalarFieldEnum, {
  name: "StatesScalarFieldEnum",
  description: undefined,
});
