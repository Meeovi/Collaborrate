import * as TypeGraphQL from "type-graphql";

export enum PartnersScalarFieldEnum {
  id = "id",
  created_at = "created_at",
  name = "name",
  address = "address",
  city = "city",
  state = "state",
  country = "country",
  isPublic = "isPublic",
  business_type = "business_type"
}
TypeGraphQL.registerEnumType(PartnersScalarFieldEnum, {
  name: "PartnersScalarFieldEnum",
  description: undefined,
});
