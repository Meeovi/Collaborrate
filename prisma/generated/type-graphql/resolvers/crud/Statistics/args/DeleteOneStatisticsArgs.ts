import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StatisticsWhereUniqueInput } from "../../../inputs/StatisticsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneStatisticsArgs {
  @TypeGraphQL.Field(_type => StatisticsWhereUniqueInput, {
    nullable: false
  })
  where!: StatisticsWhereUniqueInput;
}
