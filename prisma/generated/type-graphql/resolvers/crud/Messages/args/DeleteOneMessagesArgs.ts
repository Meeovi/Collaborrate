import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MessagesWhereUniqueInput } from "../../../inputs/MessagesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneMessagesArgs {
  @TypeGraphQL.Field(_type => MessagesWhereUniqueInput, {
    nullable: false
  })
  where!: MessagesWhereUniqueInput;
}