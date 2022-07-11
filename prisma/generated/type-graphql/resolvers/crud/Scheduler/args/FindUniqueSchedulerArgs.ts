import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchedulerWhereUniqueInput } from "../../../inputs/SchedulerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSchedulerArgs {
  @TypeGraphQL.Field(_type => SchedulerWhereUniqueInput, {
    nullable: false
  })
  where!: SchedulerWhereUniqueInput;
}
