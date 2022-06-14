import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SurveysAvgOrderByAggregateInput } from "../inputs/SurveysAvgOrderByAggregateInput";
import { SurveysCountOrderByAggregateInput } from "../inputs/SurveysCountOrderByAggregateInput";
import { SurveysMaxOrderByAggregateInput } from "../inputs/SurveysMaxOrderByAggregateInput";
import { SurveysMinOrderByAggregateInput } from "../inputs/SurveysMinOrderByAggregateInput";
import { SurveysSumOrderByAggregateInput } from "../inputs/SurveysSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SurveysOrderByWithAggregationInput", {
  isAbstract: true
})
export class SurveysOrderByWithAggregationInput {
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
  assigned_to?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  question?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  answer?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  submit_text?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  satisfied_text?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  neither_text?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  dissatisfied_text?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SurveysCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SurveysCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SurveysAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SurveysAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SurveysMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SurveysMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SurveysMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SurveysMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SurveysSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SurveysSumOrderByAggregateInput | undefined;
}
