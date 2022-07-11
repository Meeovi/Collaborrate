import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransactionsCreateWithoutCustomer_paymentInput } from "../inputs/TransactionsCreateWithoutCustomer_paymentInput";
import { TransactionsWhereUniqueInput } from "../inputs/TransactionsWhereUniqueInput";

@TypeGraphQL.InputType("TransactionsCreateOrConnectWithoutCustomer_paymentInput", {
  isAbstract: true
})
export class TransactionsCreateOrConnectWithoutCustomer_paymentInput {
  @TypeGraphQL.Field(_type => TransactionsWhereUniqueInput, {
    nullable: false
  })
  where!: TransactionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => TransactionsCreateWithoutCustomer_paymentInput, {
    nullable: false
  })
  create!: TransactionsCreateWithoutCustomer_paymentInput;
}
