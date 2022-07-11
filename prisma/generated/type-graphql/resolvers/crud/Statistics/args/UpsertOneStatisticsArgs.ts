import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StatisticsCreateInput } from "../../../inputs/StatisticsCreateInput";
import { StatisticsUpdateInput } from "../../../inputs/StatisticsUpdateInput";
import { StatisticsWhereUniqueInput } from "../../../inputs/StatisticsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneStatisticsArgs {
  @TypeGraphQL.Field(_type => StatisticsWhereUniqueInput, {
    nullable: false
  })
  where!: StatisticsWhereUniqueInput;

  @TypeGraphQL.Field(_type => StatisticsCreateInput, {
    nullable: false
  })
  create!: StatisticsCreateInput;

  @TypeGraphQL.Field(_type => StatisticsUpdateInput, {
    nullable: false
  })
  update!: StatisticsUpdateInput;
}
