import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateWithoutCustomer_paymentInput } from "../inputs/CustomersCreateWithoutCustomer_paymentInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";

@TypeGraphQL.InputType("CustomersCreateOrConnectWithoutCustomer_paymentInput", {
  isAbstract: true
})
export class CustomersCreateOrConnectWithoutCustomer_paymentInput {
  @TypeGraphQL.Field(_type => CustomersWhereUniqueInput, {
    nullable: false
  })
  where!: CustomersWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomersCreateWithoutCustomer_paymentInput, {
    nullable: false
  })
  create!: CustomersCreateWithoutCustomer_paymentInput;
}
