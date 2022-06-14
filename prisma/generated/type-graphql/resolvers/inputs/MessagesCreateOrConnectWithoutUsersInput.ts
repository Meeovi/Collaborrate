import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessagesCreateWithoutUsersInput } from "../inputs/MessagesCreateWithoutUsersInput";
import { MessagesWhereUniqueInput } from "../inputs/MessagesWhereUniqueInput";

@TypeGraphQL.InputType("MessagesCreateOrConnectWithoutUsersInput", {
  isAbstract: true
})
export class MessagesCreateOrConnectWithoutUsersInput {
  @TypeGraphQL.Field(_type => MessagesWhereUniqueInput, {
    nullable: false
  })
  where!: MessagesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MessagesCreateWithoutUsersInput, {
    nullable: false
  })
  create!: MessagesCreateWithoutUsersInput;
}
