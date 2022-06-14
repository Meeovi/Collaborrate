import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PollsUpdateInput } from "../../../inputs/PollsUpdateInput";
import { PollsWhereUniqueInput } from "../../../inputs/PollsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdatePollsArgs {
  @TypeGraphQL.Field(_type => PollsUpdateInput, {
    nullable: false
  })
  data!: PollsUpdateInput;

  @TypeGraphQL.Field(_type => PollsWhereUniqueInput, {
    nullable: false
  })
  where!: PollsWhereUniqueInput;
}
