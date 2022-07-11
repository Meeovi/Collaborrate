import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchedulerCreateInput } from "../../../inputs/SchedulerCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSchedulerArgs {
  @TypeGraphQL.Field(_type => SchedulerCreateInput, {
    nullable: false
  })
  data!: SchedulerCreateInput;
}
