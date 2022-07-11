import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StatisticsCreateInput } from "../../../inputs/StatisticsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneStatisticsArgs {
  @TypeGraphQL.Field(_type => StatisticsCreateInput, {
    nullable: false
  })
  data!: StatisticsCreateInput;
}
