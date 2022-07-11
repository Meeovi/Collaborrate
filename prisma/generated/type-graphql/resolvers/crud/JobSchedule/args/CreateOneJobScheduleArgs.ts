import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobScheduleCreateInput } from "../../../inputs/JobScheduleCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneJobScheduleArgs {
  @TypeGraphQL.Field(_type => JobScheduleCreateInput, {
    nullable: false
  })
  data!: JobScheduleCreateInput;
}
