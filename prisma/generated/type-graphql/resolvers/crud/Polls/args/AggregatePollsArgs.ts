import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PollsOrderByWithRelationInput } from "../../../inputs/PollsOrderByWithRelationInput";
import { PollsWhereInput } from "../../../inputs/PollsWhereInput";
import { PollsWhereUniqueInput } from "../../../inputs/PollsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePollsArgs {
  @TypeGraphQL.Field(_type => PollsWhereInput, {
    nullable: true
  })
  where?: PollsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PollsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PollsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PollsWhereUniqueInput, {
    nullable: true
  })
  cursor?: PollsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
