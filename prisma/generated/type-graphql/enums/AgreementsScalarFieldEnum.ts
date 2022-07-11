import * as TypeGraphQL from "type-graphql";

export enum AgreementsScalarFieldEnum {
  id = "id",
  reference_id = "reference_id",
  created = "created",
  updated = "updated",
  content = "content",
  name = "name",
  image = "image",
  excerpt = "excerpt",
  type = "type",
  user_id = "user_id",
  shop_id = "shop_id"
}
TypeGraphQL.registerEnumType(AgreementsScalarFieldEnum, {
  name: "AgreementsScalarFieldEnum",
  description: undefined,
});
