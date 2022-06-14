import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PollsWhereUniqueInput } from "../../../inputs/PollsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeletePollsArgs {
  @TypeGraphQL.Field(_type => PollsWhereUniqueInput, {
    nullable: false
  })
  where!: PollsWhereUniqueInput;
}
