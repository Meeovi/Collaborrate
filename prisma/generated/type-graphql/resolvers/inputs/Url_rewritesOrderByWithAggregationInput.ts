import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Url_rewritesAvgOrderByAggregateInput } from "../inputs/Url_rewritesAvgOrderByAggregateInput";
import { Url_rewritesCountOrderByAggregateInput } from "../inputs/Url_rewritesCountOrderByAggregateInput";
import { Url_rewritesMaxOrderByAggregateInput } from "../inputs/Url_rewritesMaxOrderByAggregateInput";
import { Url_rewritesMinOrderByAggregateInput } from "../inputs/Url_rewritesMinOrderByAggregateInput";
import { Url_rewritesSumOrderByAggregateInput } from "../inputs/Url_rewritesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Url_rewritesOrderByWithAggregationInput", {
  isAbstract: true
})
export class Url_rewritesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  request_path?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  redirect_type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  target_path?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  store?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Url_rewritesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Url_rewritesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Url_rewritesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Url_rewritesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Url_rewritesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Url_rewritesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Url_rewritesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Url_rewritesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Url_rewritesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Url_rewritesSumOrderByAggregateInput | undefined;
}
