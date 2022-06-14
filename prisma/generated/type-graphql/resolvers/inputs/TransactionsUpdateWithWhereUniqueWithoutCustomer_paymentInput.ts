import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransactionsUpdateWithoutCustomer_paymentInput } from "../inputs/TransactionsUpdateWithoutCustomer_paymentInput";
import { TransactionsWhereUniqueInput } from "../inputs/TransactionsWhereUniqueInput";

@TypeGraphQL.InputType("TransactionsUpdateWithWhereUniqueWithoutCustomer_paymentInput", {
  isAbstract: true
})
export class TransactionsUpdateWithWhereUniqueWithoutCustomer_paymentInput {
  @TypeGraphQL.Field(_type => TransactionsWhereUniqueInput, {
    nullable: false
  })
  where!: TransactionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => TransactionsUpdateWithoutCustomer_paymentInput, {
    nullable: false
  })
  data!: TransactionsUpdateWithoutCustomer_paymentInput;
}
