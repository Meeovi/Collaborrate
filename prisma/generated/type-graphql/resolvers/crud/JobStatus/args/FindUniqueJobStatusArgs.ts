import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobStatusWhereUniqueInput } from "../../../inputs/JobStatusWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueJobStatusArgs {
  @TypeGraphQL.Field(_type => JobStatusWhereUniqueInput, {
    nullable: false
  })
  where!: JobStatusWhereUniqueInput;
}
