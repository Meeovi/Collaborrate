import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AnalyticsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/AnalyticsOrderByWithRelationAndSearchRelevanceInput";
import { AnalyticsWhereInput } from "../../../inputs/AnalyticsWhereInput";
import { AnalyticsWhereUniqueInput } from "../../../inputs/AnalyticsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateAnalyticsArgs {
  @TypeGraphQL.Field(_type => AnalyticsWhereInput, {
    nullable: true
  })
  where?: AnalyticsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AnalyticsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: AnalyticsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => AnalyticsWhereUniqueInput, {
    nullable: true
  })
  cursor?: AnalyticsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
