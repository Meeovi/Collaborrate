import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobStatusWhereInput } from "../../../inputs/JobStatusWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyJobStatusArgs {
  @TypeGraphQL.Field(_type => JobStatusWhereInput, {
    nullable: true
  })
  where?: JobStatusWhereInput | undefined;
}
