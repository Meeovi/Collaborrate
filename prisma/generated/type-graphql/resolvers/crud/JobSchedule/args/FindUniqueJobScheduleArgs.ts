import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobScheduleWhereUniqueInput } from "../../../inputs/JobScheduleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueJobScheduleArgs {
  @TypeGraphQL.Field(_type => JobScheduleWhereUniqueInput, {
    nullable: false
  })
  where!: JobScheduleWhereUniqueInput;
}
