import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessagesCreateWithoutUsersInput } from "../inputs/MessagesCreateWithoutUsersInput";
import { MessagesUpdateWithoutUsersInput } from "../inputs/MessagesUpdateWithoutUsersInput";
import { MessagesWhereUniqueInput } from "../inputs/MessagesWhereUniqueInput";

@TypeGraphQL.InputType("MessagesUpsertWithWhereUniqueWithoutUsersInput", {
  isAbstract: true
})
export class MessagesUpsertWithWhereUniqueWithoutUsersInput {
  @TypeGraphQL.Field(_type => MessagesWhereUniqueInput, {
    nullable: false
  })
  where!: MessagesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MessagesUpdateWithoutUsersInput, {
    nullable: false
  })
  update!: MessagesUpdateWithoutUsersInput;

  @TypeGraphQL.Field(_type => MessagesCreateWithoutUsersInput, {
    nullable: false
  })
  create!: MessagesCreateWithoutUsersInput;
}
