import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PollsWhereInput } from "../../../inputs/PollsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPollsArgs {
  @TypeGraphQL.Field(_type => PollsWhereInput, {
    nullable: true
  })
  where?: PollsWhereInput | undefined;
}
