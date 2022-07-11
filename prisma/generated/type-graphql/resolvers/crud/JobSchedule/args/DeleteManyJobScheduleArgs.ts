import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobScheduleWhereInput } from "../../../inputs/JobScheduleWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyJobScheduleArgs {
  @TypeGraphQL.Field(_type => JobScheduleWhereInput, {
    nullable: true
  })
  where?: JobScheduleWhereInput | undefined;
}
