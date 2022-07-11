import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransactionsCreateManyCustomer_paymentInputEnvelope } from "../inputs/TransactionsCreateManyCustomer_paymentInputEnvelope";
import { TransactionsCreateOrConnectWithoutCustomer_paymentInput } from "../inputs/TransactionsCreateOrConnectWithoutCustomer_paymentInput";
import { TransactionsCreateWithoutCustomer_paymentInput } from "../inputs/TransactionsCreateWithoutCustomer_paymentInput";
import { TransactionsWhereUniqueInput } from "../inputs/TransactionsWhereUniqueInput";

@TypeGraphQL.InputType("TransactionsCreateNestedManyWithoutCustomer_paymentInput", {
  isAbstract: true
})
export class TransactionsCreateNestedManyWithoutCustomer_paymentInput {
  @TypeGraphQL.Field(_type => [TransactionsCreateWithoutCustomer_paymentInput], {
    nullable: true
  })
  create?: TransactionsCreateWithoutCustomer_paymentInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionsCreateOrConnectWithoutCustomer_paymentInput], {
    nullable: true
  })
  connectOrCreate?: TransactionsCreateOrConnectWithoutCustomer_paymentInput[] | undefined;

  @TypeGraphQL.Field(_type => TransactionsCreateManyCustomer_paymentInputEnvelope, {
    nullable: true
  })
  createMany?: TransactionsCreateManyCustomer_paymentInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TransactionsWhereUniqueInput], {
    nullable: true
  })
  connect?: TransactionsWhereUniqueInput[] | undefined;
}
