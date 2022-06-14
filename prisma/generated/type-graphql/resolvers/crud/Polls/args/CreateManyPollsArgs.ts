import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PollsCreateManyInput } from "../../../inputs/PollsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPollsArgs {
  @TypeGraphQL.Field(_type => [PollsCreateManyInput], {
    nullable: false
  })
  data!: PollsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
