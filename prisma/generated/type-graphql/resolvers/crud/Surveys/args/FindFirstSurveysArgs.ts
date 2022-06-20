import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SurveysOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/SurveysOrderByWithRelationAndSearchRelevanceInput";
import { SurveysWhereInput } from "../../../inputs/SurveysWhereInput";
import { SurveysWhereUniqueInput } from "../../../inputs/SurveysWhereUniqueInput";
import { SurveysScalarFieldEnum } from "../../../../enums/SurveysScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstSurveysArgs {
  @TypeGraphQL.Field(_type => SurveysWhereInput, {
    nullable: true
  })
  where?: SurveysWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SurveysOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: SurveysOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => SurveysWhereUniqueInput, {
    nullable: true
  })
  cursor?: SurveysWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SurveysScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "name" | "assigned_to" | "status" | "description" | "question" | "answer" | "submit_text" | "satisfied_text" | "neither_text" | "dissatisfied_text"> | undefined;
}
