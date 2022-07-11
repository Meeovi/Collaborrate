import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobScheduleUpdateInput } from "../../../inputs/JobScheduleUpdateInput";
import { JobScheduleWhereUniqueInput } from "../../../inputs/JobScheduleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneJobScheduleArgs {
  @TypeGraphQL.Field(_type => JobScheduleUpdateInput, {
    nullable: false
  })
  data!: JobScheduleUpdateInput;

  @TypeGraphQL.Field(_type => JobScheduleWhereUniqueInput, {
    nullable: false
  })
  where!: JobScheduleWhereUniqueInput;
}
