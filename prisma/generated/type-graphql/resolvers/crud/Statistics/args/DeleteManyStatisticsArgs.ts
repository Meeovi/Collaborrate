import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StatisticsWhereInput } from "../../../inputs/StatisticsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyStatisticsArgs {
  @TypeGraphQL.Field(_type => StatisticsWhereInput, {
    nullable: true
  })
  where?: StatisticsWhereInput | undefined;
}
