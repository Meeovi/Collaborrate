import * as TypeGraphQL from "type-graphql";

export enum ChannelsOrderByRelevanceFieldEnum {
  code = "code",
  name = "name",
  currency = "currency",
  default_lang = "default_lang",
  include_tax = "include_tax",
  default_zone = "default_zone",
  default_shipping = "default_shipping",
  client_id = "client_id",
  client_secret = "client_secret"
}
TypeGraphQL.registerEnumType(ChannelsOrderByRelevanceFieldEnum, {
  name: "ChannelsOrderByRelevanceFieldEnum",
  description: undefined,
});
