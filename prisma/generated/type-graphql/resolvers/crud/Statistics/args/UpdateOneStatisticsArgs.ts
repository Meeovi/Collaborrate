import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StatisticsUpdateInput } from "../../../inputs/StatisticsUpdateInput";
import { StatisticsWhereUniqueInput } from "../../../inputs/StatisticsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneStatisticsArgs {
  @TypeGraphQL.Field(_type => StatisticsUpdateInput, {
    nullable: false
  })
  data!: StatisticsUpdateInput;

  @TypeGraphQL.Field(_type => StatisticsWhereUniqueInput, {
    nullable: false
  })
  where!: StatisticsWhereUniqueInput;
}
