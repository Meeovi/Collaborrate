import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobStatusCreateInput } from "../../../inputs/JobStatusCreateInput";
import { JobStatusUpdateInput } from "../../../inputs/JobStatusUpdateInput";
import { JobStatusWhereUniqueInput } from "../../../inputs/JobStatusWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneJobStatusArgs {
  @TypeGraphQL.Field(_type => JobStatusWhereUniqueInput, {
    nullable: false
  })
  where!: JobStatusWhereUniqueInput;

  @TypeGraphQL.Field(_type => JobStatusCreateInput, {
    nullable: false
  })
  create!: JobStatusCreateInput;

  @TypeGraphQL.Field(_type => JobStatusUpdateInput, {
    nullable: false
  })
  update!: JobStatusUpdateInput;
}
