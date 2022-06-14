import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransactionsCreateManyCustomer_paymentInput } from "../inputs/TransactionsCreateManyCustomer_paymentInput";

@TypeGraphQL.InputType("TransactionsCreateManyCustomer_paymentInputEnvelope", {
  isAbstract: true
})
export class TransactionsCreateManyCustomer_paymentInputEnvelope {
  @TypeGraphQL.Field(_type => [TransactionsCreateManyCustomer_paymentInput], {
    nullable: false
  })
  data!: TransactionsCreateManyCustomer_paymentInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
