import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransactionsCreateWithoutCustomer_paymentInput } from "../inputs/TransactionsCreateWithoutCustomer_paymentInput";
import { TransactionsUpdateWithoutCustomer_paymentInput } from "../inputs/TransactionsUpdateWithoutCustomer_paymentInput";
import { TransactionsWhereUniqueInput } from "../inputs/TransactionsWhereUniqueInput";

@TypeGraphQL.InputType("TransactionsUpsertWithWhereUniqueWithoutCustomer_paymentInput", {
  isAbstract: true
})
export class TransactionsUpsertWithWhereUniqueWithoutCustomer_paymentInput {
  @TypeGraphQL.Field(_type => TransactionsWhereUniqueInput, {
    nullable: false
  })
  where!: TransactionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => TransactionsUpdateWithoutCustomer_paymentInput, {
    nullable: false
  })
  update!: TransactionsUpdateWithoutCustomer_paymentInput;

  @TypeGraphQL.Field(_type => TransactionsCreateWithoutCustomer_paymentInput, {
    nullable: false
  })
  create!: TransactionsCreateWithoutCustomer_paymentInput;
}
