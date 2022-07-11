import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MessagesCreateInput } from "../../../inputs/MessagesCreateInput";
import { MessagesUpdateInput } from "../../../inputs/MessagesUpdateInput";
import { MessagesWhereUniqueInput } from "../../../inputs/MessagesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMessagesArgs {
  @TypeGraphQL.Field(_type => MessagesWhereUniqueInput, {
    nullable: false
  })
  where!: MessagesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MessagesCreateInput, {
    nullable: false
  })
  create!: MessagesCreateInput;

  @TypeGraphQL.Field(_type => MessagesUpdateInput, {
    nullable: false
  })
  update!: MessagesUpdateInput;
}
