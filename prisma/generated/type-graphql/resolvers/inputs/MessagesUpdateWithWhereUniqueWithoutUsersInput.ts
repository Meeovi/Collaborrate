import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessagesUpdateWithoutUsersInput } from "../inputs/MessagesUpdateWithoutUsersInput";
import { MessagesWhereUniqueInput } from "../inputs/MessagesWhereUniqueInput";

@TypeGraphQL.InputType("MessagesUpdateWithWhereUniqueWithoutUsersInput", {
  isAbstract: true
})
export class MessagesUpdateWithWhereUniqueWithoutUsersInput {
  @TypeGraphQL.Field(_type => MessagesWhereUniqueInput, {
    nullable: false
  })
  where!: MessagesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MessagesUpdateWithoutUsersInput, {
    nullable: false
  })
  data!: MessagesUpdateWithoutUsersInput;
}
