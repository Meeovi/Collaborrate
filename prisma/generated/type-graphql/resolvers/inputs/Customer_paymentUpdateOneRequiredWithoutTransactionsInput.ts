import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_paymentCreateOrConnectWithoutTransactionsInput } from "../inputs/Customer_paymentCreateOrConnectWithoutTransactionsInput";
import { Customer_paymentCreateWithoutTransactionsInput } from "../inputs/Customer_paymentCreateWithoutTransactionsInput";
import { Customer_paymentUpdateWithoutTransactionsInput } from "../inputs/Customer_paymentUpdateWithoutTransactionsInput";
import { Customer_paymentUpsertWithoutTransactionsInput } from "../inputs/Customer_paymentUpsertWithoutTransactionsInput";
import { Customer_paymentWhereUniqueInput } from "../inputs/Customer_paymentWhereUniqueInput";

@TypeGraphQL.InputType("Customer_paymentUpdateOneRequiredWithoutTransactionsInput", {
  isAbstract: true
})
export class Customer_paymentUpdateOneRequiredWithoutTransactionsInput {
  @TypeGraphQL.Field(_type => Customer_paymentCreateWithoutTransactionsInput, {
    nullable: true
  })
  create?: Customer_paymentCreateWithoutTransactionsInput | undefined;

  @TypeGraphQL.Field(_type => Customer_paymentCreateOrConnectWithoutTransactionsInput, {
    nullable: true
  })
  connectOrCreate?: Customer_paymentCreateOrConnectWithoutTransactionsInput | undefined;

  @TypeGraphQL.Field(_type => Customer_paymentUpsertWithoutTransactionsInput, {
    nullable: true
  })
  upsert?: Customer_paymentUpsertWithoutTransactionsInput | undefined;

  @TypeGraphQL.Field(_type => Customer_paymentWhereUniqueInput, {
    nullable: true
  })
  connect?: Customer_paymentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Customer_paymentUpdateWithoutTransactionsInput, {
    nullable: true
  })
  update?: Customer_paymentUpdateWithoutTransactionsInput | undefined;
}
