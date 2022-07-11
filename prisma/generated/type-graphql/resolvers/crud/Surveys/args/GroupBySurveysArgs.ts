import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SurveysOrderByWithAggregationInput } from "../../../inputs/SurveysOrderByWithAggregationInput";
import { SurveysScalarWhereWithAggregatesInput } from "../../../inputs/SurveysScalarWhereWithAggregatesInput";
import { SurveysWhereInput } from "../../../inputs/SurveysWhereInput";
import { SurveysScalarFieldEnum } from "../../../../enums/SurveysScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySurveysArgs {
  @TypeGraphQL.Field(_type => SurveysWhereInput, {
    nullable: true
  })
  where?: SurveysWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SurveysOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SurveysOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SurveysScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "name" | "assigned_to" | "status" | "description" | "question" | "answer" | "submit_text" | "satisfied_text" | "neither_text" | "dissatisfied_text">;

  @TypeGraphQL.Field(_type => SurveysScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SurveysScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
