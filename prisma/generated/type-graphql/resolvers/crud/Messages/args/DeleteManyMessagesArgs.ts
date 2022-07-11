import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MessagesWhereInput } from "../../../inputs/MessagesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMessagesArgs {
  @TypeGraphQL.Field(_type => MessagesWhereInput, {
    nullable: true
  })
  where?: MessagesWhereInput | undefined;
}
