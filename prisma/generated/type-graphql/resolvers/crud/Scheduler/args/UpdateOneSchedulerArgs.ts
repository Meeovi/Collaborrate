import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchedulerUpdateInput } from "../../../inputs/SchedulerUpdateInput";
import { SchedulerWhereUniqueInput } from "../../../inputs/SchedulerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSchedulerArgs {
  @TypeGraphQL.Field(_type => SchedulerUpdateInput, {
    nullable: false
  })
  data!: SchedulerUpdateInput;

  @TypeGraphQL.Field(_type => SchedulerWhereUniqueInput, {
    nullable: false
  })
  where!: SchedulerWhereUniqueInput;
}
