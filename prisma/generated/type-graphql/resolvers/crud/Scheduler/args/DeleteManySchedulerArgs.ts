import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchedulerWhereInput } from "../../../inputs/SchedulerWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySchedulerArgs {
  @TypeGraphQL.Field(_type => SchedulerWhereInput, {
    nullable: true
  })
  where?: SchedulerWhereInput | undefined;
}
