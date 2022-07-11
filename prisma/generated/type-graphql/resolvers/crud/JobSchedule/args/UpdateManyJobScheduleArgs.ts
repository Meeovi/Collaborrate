import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobScheduleUpdateManyMutationInput } from "../../../inputs/JobScheduleUpdateManyMutationInput";
import { JobScheduleWhereInput } from "../../../inputs/JobScheduleWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyJobScheduleArgs {
  @TypeGraphQL.Field(_type => JobScheduleUpdateManyMutationInput, {
    nullable: false
  })
  data!: JobScheduleUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => JobScheduleWhereInput, {
    nullable: true
  })
  where?: JobScheduleWhereInput | undefined;
}
