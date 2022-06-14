import * as TypeGraphQL from "type-graphql";

export enum BrandsScalarFieldEnum {
  id = "id",
  created_at = "created_at",
  code = "code",
  name = "name",
  country = "country",
  state = "state",
  isPublic = "isPublic",
  city = "city",
  product = "product",
  description = "description",
  media = "media"
}
TypeGraphQL.registerEnumType(BrandsScalarFieldEnum, {
  name: "BrandsScalarFieldEnum",
  description: undefined,
});
