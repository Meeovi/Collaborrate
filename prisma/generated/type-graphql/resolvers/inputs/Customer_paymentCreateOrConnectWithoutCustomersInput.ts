import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_paymentCreateWithoutCustomersInput } from "../inputs/Customer_paymentCreateWithoutCustomersInput";
import { Customer_paymentWhereUniqueInput } from "../inputs/Customer_paymentWhereUniqueInput";

@TypeGraphQL.InputType("Customer_paymentCreateOrConnectWithoutCustomersInput", {
  isAbstract: true
})
export class Customer_paymentCreateOrConnectWithoutCustomersInput {
  @TypeGraphQL.Field(_type => Customer_paymentWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_paymentWhereUniqueInput;

  @TypeGraphQL.Field(_type => Customer_paymentCreateWithoutCustomersInput, {
    nullable: false
  })
  create!: Customer_paymentCreateWithoutCustomersInput;
}
