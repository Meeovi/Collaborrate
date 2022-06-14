import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cart_price_rulesAvgOrderByAggregateInput } from "../inputs/Cart_price_rulesAvgOrderByAggregateInput";
import { Cart_price_rulesCountOrderByAggregateInput } from "../inputs/Cart_price_rulesCountOrderByAggregateInput";
import { Cart_price_rulesMaxOrderByAggregateInput } from "../inputs/Cart_price_rulesMaxOrderByAggregateInput";
import { Cart_price_rulesMinOrderByAggregateInput } from "../inputs/Cart_price_rulesMinOrderByAggregateInput";
import { Cart_price_rulesSumOrderByAggregateInput } from "../inputs/Cart_price_rulesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Cart_price_rulesOrderByWithAggregationInput", {
  isAbstract: true
})
export class Cart_price_rulesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  rule?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  coupon?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  uses_per_customer?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  priority?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  start_date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  end_date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  website?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  actions_apply?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  actions_discount_amount?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  actions_discard_subsequent_rules?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  actions_max_qty_discount_is_applied_to?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  actions_discount_qty_step?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  actions_apply_shipping_amount?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Cart_price_rulesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Cart_price_rulesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Cart_price_rulesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Cart_price_rulesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Cart_price_rulesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Cart_price_rulesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Cart_price_rulesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Cart_price_rulesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Cart_price_rulesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Cart_price_rulesSumOrderByAggregateInput | undefined;
}
