import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MessagesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/MessagesOrderByWithRelationAndSearchRelevanceInput";
import { MessagesWhereInput } from "../../../inputs/MessagesWhereInput";
import { MessagesWhereUniqueInput } from "../../../inputs/MessagesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateMessagesArgs {
  @TypeGraphQL.Field(_type => MessagesWhereInput, {
    nullable: true
  })
  where?: MessagesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MessagesOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: MessagesOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => MessagesWhereUniqueInput, {
    nullable: true
  })
  cursor?: MessagesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
