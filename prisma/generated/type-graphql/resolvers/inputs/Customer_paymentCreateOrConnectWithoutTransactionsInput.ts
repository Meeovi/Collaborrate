import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_paymentCreateWithoutTransactionsInput } from "../inputs/Customer_paymentCreateWithoutTransactionsInput";
import { Customer_paymentWhereUniqueInput } from "../inputs/Customer_paymentWhereUniqueInput";

@TypeGraphQL.InputType("Customer_paymentCreateOrConnectWithoutTransactionsInput", {
  isAbstract: true
})
export class Customer_paymentCreateOrConnectWithoutTransactionsInput {
  @TypeGraphQL.Field(_type => Customer_paymentWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_paymentWhereUniqueInput;

  @TypeGraphQL.Field(_type => Customer_paymentCreateWithoutTransactionsInput, {
    nullable: false
  })
  create!: Customer_paymentCreateWithoutTransactionsInput;
}
