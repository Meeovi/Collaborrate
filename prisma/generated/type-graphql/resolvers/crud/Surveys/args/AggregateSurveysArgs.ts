import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SurveysOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/SurveysOrderByWithRelationAndSearchRelevanceInput";
import { SurveysWhereInput } from "../../../inputs/SurveysWhereInput";
import { SurveysWhereUniqueInput } from "../../../inputs/SurveysWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSurveysArgs {
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
}
