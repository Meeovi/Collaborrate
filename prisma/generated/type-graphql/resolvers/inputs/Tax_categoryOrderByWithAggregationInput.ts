import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Tax_categoryAvgOrderByAggregateInput } from "../inputs/Tax_categoryAvgOrderByAggregateInput";
import { Tax_categoryCountOrderByAggregateInput } from "../inputs/Tax_categoryCountOrderByAggregateInput";
import { Tax_categoryMaxOrderByAggregateInput } from "../inputs/Tax_categoryMaxOrderByAggregateInput";
import { Tax_categoryMinOrderByAggregateInput } from "../inputs/Tax_categoryMinOrderByAggregateInput";
import { Tax_categorySumOrderByAggregateInput } from "../inputs/Tax_categorySumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Tax_categoryOrderByWithAggregationInput", {
  isAbstract: true
})
export class Tax_categoryOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  default?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Tax_categoryCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Tax_categoryCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Tax_categoryAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Tax_categoryAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Tax_categoryMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Tax_categoryMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Tax_categoryMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Tax_categoryMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Tax_categorySumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Tax_categorySumOrderByAggregateInput | undefined;
}
