import * as TypeGraphQL from "type-graphql";

export enum ApitokenScalarFieldEnum {
  id = "id",
  created_at = "created_at",
  name = "name",
  token_type = "token_type",
  description = "description",
  token = "token"
}
TypeGraphQL.registerEnumType(ApitokenScalarFieldEnum, {
  name: "ApitokenScalarFieldEnum",
  description: undefined,
});
