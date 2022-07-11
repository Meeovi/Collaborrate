import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Catalog_price_ruleOrderByWithAggregationInput } from "../../../inputs/Catalog_price_ruleOrderByWithAggregationInput";
import { Catalog_price_ruleScalarWhereWithAggregatesInput } from "../../../inputs/Catalog_price_ruleScalarWhereWithAggregatesInput";
import { Catalog_price_ruleWhereInput } from "../../../inputs/Catalog_price_ruleWhereInput";
import { Catalog_price_ruleScalarFieldEnum } from "../../../../enums/Catalog_price_ruleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCatalog_price_ruleArgs {
  @TypeGraphQL.Field(_type => Catalog_price_ruleWhereInput, {
    nullable: true
  })
  where?: Catalog_price_ruleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Catalog_price_ruleOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Catalog_price_ruleOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Catalog_price_ruleScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "rule" | "description" | "active" | "customer_groups" | "priority" | "start_date" | "end_date" | "status" | "website" | "actions_apply" | "actions_discount_amount" | "actions_discard_subsequent_rules">;

  @TypeGraphQL.Field(_type => Catalog_price_ruleScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Catalog_price_ruleScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
