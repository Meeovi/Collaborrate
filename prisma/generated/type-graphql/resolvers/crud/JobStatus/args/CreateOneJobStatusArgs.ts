import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobStatusCreateInput } from "../../../inputs/JobStatusCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneJobStatusArgs {
  @TypeGraphQL.Field(_type => JobStatusCreateInput, {
    nullable: false
  })
  data!: JobStatusCreateInput;
}
