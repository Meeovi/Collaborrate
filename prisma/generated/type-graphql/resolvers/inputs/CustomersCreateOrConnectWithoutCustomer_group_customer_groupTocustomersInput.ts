import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput } from "../inputs/CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";

@TypeGraphQL.InputType("CustomersCreateOrConnectWithoutCustomer_group_customer_groupTocustomersInput", {
  isAbstract: true
})
export class CustomersCreateOrConnectWithoutCustomer_group_customer_groupTocustomersInput {
  @TypeGraphQL.Field(_type => CustomersWhereUniqueInput, {
    nullable: false
  })
  where!: CustomersWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput, {
    nullable: false
  })
  create!: CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput;
}
