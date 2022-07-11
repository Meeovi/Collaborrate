import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PollsCreateInput } from "../../../inputs/PollsCreateInput";
import { PollsUpdateInput } from "../../../inputs/PollsUpdateInput";
import { PollsWhereUniqueInput } from "../../../inputs/PollsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePollsArgs {
  @TypeGraphQL.Field(_type => PollsWhereUniqueInput, {
    nullable: false
  })
  where!: PollsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PollsCreateInput, {
    nullable: false
  })
  create!: PollsCreateInput;

  @TypeGraphQL.Field(_type => PollsUpdateInput, {
    nullable: false
  })
  update!: PollsUpdateInput;
}
