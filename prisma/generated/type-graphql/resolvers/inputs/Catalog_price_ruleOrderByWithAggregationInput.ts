import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Catalog_price_ruleAvgOrderByAggregateInput } from "../inputs/Catalog_price_ruleAvgOrderByAggregateInput";
import { Catalog_price_ruleCountOrderByAggregateInput } from "../inputs/Catalog_price_ruleCountOrderByAggregateInput";
import { Catalog_price_ruleMaxOrderByAggregateInput } from "../inputs/Catalog_price_ruleMaxOrderByAggregateInput";
import { Catalog_price_ruleMinOrderByAggregateInput } from "../inputs/Catalog_price_ruleMinOrderByAggregateInput";
import { Catalog_price_ruleSumOrderByAggregateInput } from "../inputs/Catalog_price_ruleSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Catalog_price_ruleOrderByWithAggregationInput", {
  isAbstract: true
})
export class Catalog_price_ruleOrderByWithAggregationInput {
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
  customer_groups?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => Catalog_price_ruleCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Catalog_price_ruleCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Catalog_price_ruleAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Catalog_price_ruleAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Catalog_price_ruleMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Catalog_price_ruleMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Catalog_price_ruleMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Catalog_price_ruleMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Catalog_price_ruleSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Catalog_price_ruleSumOrderByAggregateInput | undefined;
}
