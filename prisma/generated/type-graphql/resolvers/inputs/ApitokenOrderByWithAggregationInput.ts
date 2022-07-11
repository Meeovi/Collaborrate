import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApitokenAvgOrderByAggregateInput } from "../inputs/ApitokenAvgOrderByAggregateInput";
import { ApitokenCountOrderByAggregateInput } from "../inputs/ApitokenCountOrderByAggregateInput";
import { ApitokenMaxOrderByAggregateInput } from "../inputs/ApitokenMaxOrderByAggregateInput";
import { ApitokenMinOrderByAggregateInput } from "../inputs/ApitokenMinOrderByAggregateInput";
import { ApitokenSumOrderByAggregateInput } from "../inputs/ApitokenSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ApitokenOrderByWithAggregationInput", {
  isAbstract: true
})
export class ApitokenOrderByWithAggregationInput {
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
  token_type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  token?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ApitokenCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ApitokenCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ApitokenAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ApitokenAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ApitokenMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ApitokenMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ApitokenMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ApitokenMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ApitokenSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ApitokenSumOrderByAggregateInput | undefined;
}
