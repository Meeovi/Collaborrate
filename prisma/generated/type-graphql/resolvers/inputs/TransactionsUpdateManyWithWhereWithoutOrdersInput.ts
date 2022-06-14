import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransactionsScalarWhereInput } from "../inputs/TransactionsScalarWhereInput";
import { TransactionsUpdateManyMutationInput } from "../inputs/TransactionsUpdateManyMutationInput";

@TypeGraphQL.InputType("TransactionsUpdateManyWithWhereWithoutOrdersInput", {
  isAbstract: true
})
export class TransactionsUpdateManyWithWhereWithoutOrdersInput {
  @TypeGraphQL.Field(_type => TransactionsScalarWhereInput, {
    nullable: false
  })
  where!: TransactionsScalarWhereInput;

  @TypeGraphQL.Field(_type => TransactionsUpdateManyMutationInput, {
    nullable: false
  })
  data!: TransactionsUpdateManyMutationInput;
}
