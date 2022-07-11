import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisitsAvgOrderByAggregateInput } from "../inputs/VisitsAvgOrderByAggregateInput";
import { VisitsCountOrderByAggregateInput } from "../inputs/VisitsCountOrderByAggregateInput";
import { VisitsMaxOrderByAggregateInput } from "../inputs/VisitsMaxOrderByAggregateInput";
import { VisitsMinOrderByAggregateInput } from "../inputs/VisitsMinOrderByAggregateInput";
import { VisitsSumOrderByAggregateInput } from "../inputs/VisitsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("VisitsOrderByWithAggregationInput", {
  isAbstract: true
})
export class VisitsOrderByWithAggregationInput {
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
  location?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  username?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  reason?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  content?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  emergency?: "asc" | "desc" | undefined;

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
  task?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  meeting?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => VisitsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: VisitsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VisitsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: VisitsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VisitsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: VisitsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VisitsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: VisitsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VisitsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: VisitsSumOrderByAggregateInput | undefined;
}
