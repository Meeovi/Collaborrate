import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_paymentCreateWithoutTransactionsInput } from "../inputs/Customer_paymentCreateWithoutTransactionsInput";
import { Customer_paymentUpdateWithoutTransactionsInput } from "../inputs/Customer_paymentUpdateWithoutTransactionsInput";

@TypeGraphQL.InputType("Customer_paymentUpsertWithoutTransactionsInput", {
  isAbstract: true
})
export class Customer_paymentUpsertWithoutTransactionsInput {
  @TypeGraphQL.Field(_type => Customer_paymentUpdateWithoutTransactionsInput, {
    nullable: false
  })
  update!: Customer_paymentUpdateWithoutTransactionsInput;

  @TypeGraphQL.Field(_type => Customer_paymentCreateWithoutTransactionsInput, {
    nullable: false
  })
  create!: Customer_paymentCreateWithoutTransactionsInput;
}
