import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MessagesCreateInput } from "../../../inputs/MessagesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMessagesArgs {
  @TypeGraphQL.Field(_type => MessagesCreateInput, {
    nullable: false
  })
  data!: MessagesCreateInput;
}
