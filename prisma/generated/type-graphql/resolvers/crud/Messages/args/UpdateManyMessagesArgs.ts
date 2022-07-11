import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MessagesUpdateManyMutationInput } from "../../../inputs/MessagesUpdateManyMutationInput";
import { MessagesWhereInput } from "../../../inputs/MessagesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMessagesArgs {
  @TypeGraphQL.Field(_type => MessagesUpdateManyMutationInput, {
    nullable: false
  })
  data!: MessagesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MessagesWhereInput, {
    nullable: true
  })
  where?: MessagesWhereInput | undefined;
}
