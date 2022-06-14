import * as TypeGraphQL from "type-graphql";

export enum CurrenciesScalarFieldEnum {
  id = "id",
  created_at = "created_at",
  code = "code",
  name = "name",
  region = "region"
}
TypeGraphQL.registerEnumType(CurrenciesScalarFieldEnum, {
  name: "CurrenciesScalarFieldEnum",
  description: undefined,
});
