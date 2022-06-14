import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateOrConnectWithoutCustomer_paymentInput } from "../inputs/CustomersCreateOrConnectWithoutCustomer_paymentInput";
import { CustomersCreateWithoutCustomer_paymentInput } from "../inputs/CustomersCreateWithoutCustomer_paymentInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";

@TypeGraphQL.InputType("CustomersCreateNestedOneWithoutCustomer_paymentInput", {
  isAbstract: true
})
export class CustomersCreateNestedOneWithoutCustomer_paymentInput {
  @TypeGraphQL.Field(_type => CustomersCreateWithoutCustomer_paymentInput, {
    nullable: true
  })
  create?: CustomersCreateWithoutCustomer_paymentInput | undefined;

  @TypeGraphQL.Field(_type => CustomersCreateOrConnectWithoutCustomer_paymentInput, {
    nullable: true
  })
  connectOrCreate?: CustomersCreateOrConnectWithoutCustomer_paymentInput | undefined;

  @TypeGraphQL.Field(_type => CustomersWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomersWhereUniqueInput | undefined;
}
