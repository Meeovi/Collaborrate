import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Tax_ruleAvgOrderByAggregateInput } from "../inputs/Tax_ruleAvgOrderByAggregateInput";
import { Tax_ruleCountOrderByAggregateInput } from "../inputs/Tax_ruleCountOrderByAggregateInput";
import { Tax_ruleMaxOrderByAggregateInput } from "../inputs/Tax_ruleMaxOrderByAggregateInput";
import { Tax_ruleMinOrderByAggregateInput } from "../inputs/Tax_ruleMinOrderByAggregateInput";
import { Tax_ruleSumOrderByAggregateInput } from "../inputs/Tax_ruleSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Tax_ruleOrderByWithAggregationInput", {
  isAbstract: true
})
export class Tax_ruleOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tax_rate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  prod_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Tax_ruleCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Tax_ruleCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Tax_ruleAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Tax_ruleAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Tax_ruleMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Tax_ruleMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Tax_ruleMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Tax_ruleMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Tax_ruleSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Tax_ruleSumOrderByAggregateInput | undefined;
}
