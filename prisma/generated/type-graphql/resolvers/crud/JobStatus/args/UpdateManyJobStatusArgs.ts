import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobStatusUpdateManyMutationInput } from "../../../inputs/JobStatusUpdateManyMutationInput";
import { JobStatusWhereInput } from "../../../inputs/JobStatusWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyJobStatusArgs {
  @TypeGraphQL.Field(_type => JobStatusUpdateManyMutationInput, {
    nullable: false
  })
  data!: JobStatusUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => JobStatusWhereInput, {
    nullable: true
  })
  where?: JobStatusWhereInput | undefined;
}
