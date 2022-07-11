import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobStatusCreateManyInput } from "../../../inputs/JobStatusCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyJobStatusArgs {
  @TypeGraphQL.Field(_type => [JobStatusCreateManyInput], {
    nullable: false
  })
  data!: JobStatusCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
