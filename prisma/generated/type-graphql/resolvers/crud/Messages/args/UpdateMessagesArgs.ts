import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MessagesUpdateInput } from "../../../inputs/MessagesUpdateInput";
import { MessagesWhereUniqueInput } from "../../../inputs/MessagesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateMessagesArgs {
  @TypeGraphQL.Field(_type => MessagesUpdateInput, {
    nullable: false
  })
  data!: MessagesUpdateInput;

  @TypeGraphQL.Field(_type => MessagesWhereUniqueInput, {
    nullable: false
  })
  where!: MessagesWhereUniqueInput;
}
