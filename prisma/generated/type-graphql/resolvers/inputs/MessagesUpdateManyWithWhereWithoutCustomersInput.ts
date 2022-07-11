import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessagesScalarWhereInput } from "../inputs/MessagesScalarWhereInput";
import { MessagesUpdateManyMutationInput } from "../inputs/MessagesUpdateManyMutationInput";

@TypeGraphQL.InputType("MessagesUpdateManyWithWhereWithoutCustomersInput", {
  isAbstract: true
})
export class MessagesUpdateManyWithWhereWithoutCustomersInput {
  @TypeGraphQL.Field(_type => MessagesScalarWhereInput, {
    nullable: false
  })
  where!: MessagesScalarWhereInput;

  @TypeGraphQL.Field(_type => MessagesUpdateManyMutationInput, {
    nullable: false
  })
  data!: MessagesUpdateManyMutationInput;
}
