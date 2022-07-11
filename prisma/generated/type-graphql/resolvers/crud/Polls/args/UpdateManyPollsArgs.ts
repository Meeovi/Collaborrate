import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PollsUpdateManyMutationInput } from "../../../inputs/PollsUpdateManyMutationInput";
import { PollsWhereInput } from "../../../inputs/PollsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPollsArgs {
  @TypeGraphQL.Field(_type => PollsUpdateManyMutationInput, {
    nullable: false
  })
  data!: PollsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PollsWhereInput, {
    nullable: true
  })
  where?: PollsWhereInput | undefined;
}
