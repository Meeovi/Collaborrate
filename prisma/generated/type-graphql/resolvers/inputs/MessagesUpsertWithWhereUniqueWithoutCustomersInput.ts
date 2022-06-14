import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessagesCreateWithoutCustomersInput } from "../inputs/MessagesCreateWithoutCustomersInput";
import { MessagesUpdateWithoutCustomersInput } from "../inputs/MessagesUpdateWithoutCustomersInput";
import { MessagesWhereUniqueInput } from "../inputs/MessagesWhereUniqueInput";

@TypeGraphQL.InputType("MessagesUpsertWithWhereUniqueWithoutCustomersInput", {
  isAbstract: true
})
export class MessagesUpsertWithWhereUniqueWithoutCustomersInput {
  @TypeGraphQL.Field(_type => MessagesWhereUniqueInput, {
    nullable: false
  })
  where!: MessagesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MessagesUpdateWithoutCustomersInput, {
    nullable: false
  })
  update!: MessagesUpdateWithoutCustomersInput;

  @TypeGraphQL.Field(_type => MessagesCreateWithoutCustomersInput, {
    nullable: false
  })
  create!: MessagesCreateWithoutCustomersInput;
}
