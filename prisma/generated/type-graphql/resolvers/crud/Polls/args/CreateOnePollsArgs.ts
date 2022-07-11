import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PollsCreateInput } from "../../../inputs/PollsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePollsArgs {
  @TypeGraphQL.Field(_type => PollsCreateInput, {
    nullable: false
  })
  data!: PollsCreateInput;
}