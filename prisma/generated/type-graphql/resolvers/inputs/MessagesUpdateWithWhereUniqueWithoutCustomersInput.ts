import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessagesUpdateWithoutCustomersInput } from "../inputs/MessagesUpdateWithoutCustomersInput";
import { MessagesWhereUniqueInput } from "../inputs/MessagesWhereUniqueInput";

@TypeGraphQL.InputType("MessagesUpdateWithWhereUniqueWithoutCustomersInput", {
  isAbstract: true
})
export class MessagesUpdateWithWhereUniqueWithoutCustomersInput {
  @TypeGraphQL.Field(_type => MessagesWhereUniqueInput, {
    nullable: false
  })
  where!: MessagesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MessagesUpdateWithoutCustomersInput, {
    nullable: false
  })
  data!: MessagesUpdateWithoutCustomersInput;
}
