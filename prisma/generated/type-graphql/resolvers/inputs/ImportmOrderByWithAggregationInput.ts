import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ImportmAvgOrderByAggregateInput } from "../inputs/ImportmAvgOrderByAggregateInput";
import { ImportmCountOrderByAggregateInput } from "../inputs/ImportmCountOrderByAggregateInput";
import { ImportmMaxOrderByAggregateInput } from "../inputs/ImportmMaxOrderByAggregateInput";
import { ImportmMinOrderByAggregateInput } from "../inputs/ImportmMinOrderByAggregateInput";
import { ImportmSumOrderByAggregateInput } from "../inputs/ImportmSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ImportmOrderByWithAggregationInput", {
  isAbstract: true
})
export class ImportmOrderByWithAggregationInput {
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
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  file?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  url?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  image?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ImportmCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ImportmCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ImportmAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ImportmAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ImportmMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ImportmMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ImportmMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ImportmMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ImportmSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ImportmSumOrderByAggregateInput | undefined;
}
