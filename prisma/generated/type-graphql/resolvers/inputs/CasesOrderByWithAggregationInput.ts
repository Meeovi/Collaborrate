import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CasesAvgOrderByAggregateInput } from "../inputs/CasesAvgOrderByAggregateInput";
import { CasesCountOrderByAggregateInput } from "../inputs/CasesCountOrderByAggregateInput";
import { CasesMaxOrderByAggregateInput } from "../inputs/CasesMaxOrderByAggregateInput";
import { CasesMinOrderByAggregateInput } from "../inputs/CasesMinOrderByAggregateInput";
import { CasesSumOrderByAggregateInput } from "../inputs/CasesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CasesOrderByWithAggregationInput", {
  isAbstract: true
})
export class CasesOrderByWithAggregationInput {
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
  case_number?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  state?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  subject?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  resolution?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  priority?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  account_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  assigned_to?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  date_modified?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CasesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CasesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CasesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CasesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CasesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CasesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CasesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CasesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CasesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CasesSumOrderByAggregateInput | undefined;
}
