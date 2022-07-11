import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobScheduleCreateManyInput } from "../../../inputs/JobScheduleCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyJobScheduleArgs {
  @TypeGraphQL.Field(_type => [JobScheduleCreateManyInput], {
    nullable: false
  })
  data!: JobScheduleCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
