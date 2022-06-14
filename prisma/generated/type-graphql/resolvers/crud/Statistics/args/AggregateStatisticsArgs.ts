import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StatisticsOrderByWithRelationInput } from "../../../inputs/StatisticsOrderByWithRelationInput";
import { StatisticsWhereInput } from "../../../inputs/StatisticsWhereInput";
import { StatisticsWhereUniqueInput } from "../../../inputs/StatisticsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateStatisticsArgs {
  @TypeGraphQL.Field(_type => StatisticsWhereInput, {
    nullable: true
  })
  where?: StatisticsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StatisticsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: StatisticsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => StatisticsWhereUniqueInput, {
    nullable: true
  })
  cursor?: StatisticsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
