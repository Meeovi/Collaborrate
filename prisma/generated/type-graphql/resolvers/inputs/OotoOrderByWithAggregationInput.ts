import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OotoAvgOrderByAggregateInput } from "../inputs/OotoAvgOrderByAggregateInput";
import { OotoCountOrderByAggregateInput } from "../inputs/OotoCountOrderByAggregateInput";
import { OotoMaxOrderByAggregateInput } from "../inputs/OotoMaxOrderByAggregateInput";
import { OotoMinOrderByAggregateInput } from "../inputs/OotoMinOrderByAggregateInput";
import { OotoSumOrderByAggregateInput } from "../inputs/OotoSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("OotoOrderByWithAggregationInput", {
  isAbstract: true
})
export class OotoOrderByWithAggregationInput {
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
  login?: "asc" | "desc" | undefined;

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
  note?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  using_time?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  location?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => OotoCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: OotoCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OotoAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: OotoAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OotoMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: OotoMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OotoMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: OotoMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OotoSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: OotoSumOrderByAggregateInput | undefined;
}
