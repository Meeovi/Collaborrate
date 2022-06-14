import * as TypeGraphQL from "type-graphql";

export enum Catalog_price_ruleScalarFieldEnum {
  id = "id",
  rule = "rule",
  description = "description",
  active = "active",
  customer_groups = "customer_groups",
  priority = "priority",
  start_date = "start_date",
  end_date = "end_date",
  status = "status",
  website = "website",
  actions_apply = "actions_apply",
  actions_discount_amount = "actions_discount_amount",
  actions_discard_subsequent_rules = "actions_discard_subsequent_rules"
}
TypeGraphQL.registerEnumType(Catalog_price_ruleScalarFieldEnum, {
  name: "Catalog_price_ruleScalarFieldEnum",
  description: undefined,
});
