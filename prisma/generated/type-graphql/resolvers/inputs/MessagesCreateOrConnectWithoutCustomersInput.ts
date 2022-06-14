import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessagesCreateWithoutCustomersInput } from "../inputs/MessagesCreateWithoutCustomersInput";
import { MessagesWhereUniqueInput } from "../inputs/MessagesWhereUniqueInput";

@TypeGraphQL.InputType("MessagesCreateOrConnectWithoutCustomersInput", {
  isAbstract: true
})
export class MessagesCreateOrConnectWithoutCustomersInput {
  @TypeGraphQL.Field(_type => MessagesWhereUniqueInput, {
    nullable: false
  })
  where!: MessagesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MessagesCreateWithoutCustomersInput, {
    nullable: false
  })
  create!: MessagesCreateWithoutCustomersInput;
}
