import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateWithoutCustomer_paymentInput } from "../inputs/CustomersCreateWithoutCustomer_paymentInput";
import { CustomersUpdateWithoutCustomer_paymentInput } from "../inputs/CustomersUpdateWithoutCustomer_paymentInput";

@TypeGraphQL.InputType("CustomersUpsertWithoutCustomer_paymentInput", {
  isAbstract: true
})
export class CustomersUpsertWithoutCustomer_paymentInput {
  @TypeGraphQL.Field(_type => CustomersUpdateWithoutCustomer_paymentInput, {
    nullable: false
  })
  update!: CustomersUpdateWithoutCustomer_paymentInput;

  @TypeGraphQL.Field(_type => CustomersCreateWithoutCustomer_paymentInput, {
    nullable: false
  })
  create!: CustomersCreateWithoutCustomer_paymentInput;
}
