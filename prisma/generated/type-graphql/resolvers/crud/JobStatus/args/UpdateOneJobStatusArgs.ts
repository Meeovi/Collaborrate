import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobStatusUpdateInput } from "../../../inputs/JobStatusUpdateInput";
import { JobStatusWhereUniqueInput } from "../../../inputs/JobStatusWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneJobStatusArgs {
  @TypeGraphQL.Field(_type => JobStatusUpdateInput, {
    nullable: false
  })
  data!: JobStatusUpdateInput;

  @TypeGraphQL.Field(_type => JobStatusWhereUniqueInput, {
    nullable: false
  })
  where!: JobStatusWhereUniqueInput;
}
