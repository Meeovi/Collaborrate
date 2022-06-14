import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MessagesCreateInput } from "../../../inputs/MessagesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateMessagesArgs {
  @TypeGraphQL.Field(_type => MessagesCreateInput, {
    nullable: false
  })
  data!: MessagesCreateInput;
}
