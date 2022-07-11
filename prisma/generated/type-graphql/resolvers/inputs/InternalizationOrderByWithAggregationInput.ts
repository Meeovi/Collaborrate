import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InternalizationAvgOrderByAggregateInput } from "../inputs/InternalizationAvgOrderByAggregateInput";
import { InternalizationCountOrderByAggregateInput } from "../inputs/InternalizationCountOrderByAggregateInput";
import { InternalizationMaxOrderByAggregateInput } from "../inputs/InternalizationMaxOrderByAggregateInput";
import { InternalizationMinOrderByAggregateInput } from "../inputs/InternalizationMinOrderByAggregateInput";
import { InternalizationSumOrderByAggregateInput } from "../inputs/InternalizationSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("InternalizationOrderByWithAggregationInput", {
  isAbstract: true
})
export class InternalizationOrderByWithAggregationInput {
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
  region?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  default?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  website?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => InternalizationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: InternalizationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => InternalizationAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: InternalizationAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => InternalizationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: InternalizationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => InternalizationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: InternalizationMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => InternalizationSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: InternalizationSumOrderByAggregateInput | undefined;
}
