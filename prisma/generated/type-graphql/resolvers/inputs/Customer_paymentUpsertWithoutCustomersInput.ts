import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_paymentCreateWithoutCustomersInput } from "../inputs/Customer_paymentCreateWithoutCustomersInput";
import { Customer_paymentUpdateWithoutCustomersInput } from "../inputs/Customer_paymentUpdateWithoutCustomersInput";

@TypeGraphQL.InputType("Customer_paymentUpsertWithoutCustomersInput", {
  isAbstract: true
})
export class Customer_paymentUpsertWithoutCustomersInput {
  @TypeGraphQL.Field(_type => Customer_paymentUpdateWithoutCustomersInput, {
    nullable: false
  })
  update!: Customer_paymentUpdateWithoutCustomersInput;

  @TypeGraphQL.Field(_type => Customer_paymentCreateWithoutCustomersInput, {
    nullable: false
  })
  create!: Customer_paymentCreateWithoutCustomersInput;
}
