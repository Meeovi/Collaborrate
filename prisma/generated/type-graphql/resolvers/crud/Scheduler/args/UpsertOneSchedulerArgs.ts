import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchedulerCreateInput } from "../../../inputs/SchedulerCreateInput";
import { SchedulerUpdateInput } from "../../../inputs/SchedulerUpdateInput";
import { SchedulerWhereUniqueInput } from "../../../inputs/SchedulerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSchedulerArgs {
  @TypeGraphQL.Field(_type => SchedulerWhereUniqueInput, {
    nullable: false
  })
  where!: SchedulerWhereUniqueInput;

  @TypeGraphQL.Field(_type => SchedulerCreateInput, {
    nullable: false
  })
  create!: SchedulerCreateInput;

  @TypeGraphQL.Field(_type => SchedulerUpdateInput, {
    nullable: false
  })
  update!: SchedulerUpdateInput;
}
