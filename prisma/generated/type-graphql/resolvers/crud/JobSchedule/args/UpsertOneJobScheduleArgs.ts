import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobScheduleCreateInput } from "../../../inputs/JobScheduleCreateInput";
import { JobScheduleUpdateInput } from "../../../inputs/JobScheduleUpdateInput";
import { JobScheduleWhereUniqueInput } from "../../../inputs/JobScheduleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneJobScheduleArgs {
  @TypeGraphQL.Field(_type => JobScheduleWhereUniqueInput, {
    nullable: false
  })
  where!: JobScheduleWhereUniqueInput;

  @TypeGraphQL.Field(_type => JobScheduleCreateInput, {
    nullable: false
  })
  create!: JobScheduleCreateInput;

  @TypeGraphQL.Field(_type => JobScheduleUpdateInput, {
    nullable: false
  })
  update!: JobScheduleUpdateInput;
}
