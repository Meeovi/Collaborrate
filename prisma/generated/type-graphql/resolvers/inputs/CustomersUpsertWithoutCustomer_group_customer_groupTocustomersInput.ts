import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput } from "../inputs/CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput";
import { CustomersUpdateWithoutCustomer_group_customer_groupTocustomersInput } from "../inputs/CustomersUpdateWithoutCustomer_group_customer_groupTocustomersInput";

@TypeGraphQL.InputType("CustomersUpsertWithoutCustomer_group_customer_groupTocustomersInput", {
  isAbstract: true
})
export class CustomersUpsertWithoutCustomer_group_customer_groupTocustomersInput {
  @TypeGraphQL.Field(_type => CustomersUpdateWithoutCustomer_group_customer_groupTocustomersInput, {
    nullable: false
  })
  update!: CustomersUpdateWithoutCustomer_group_customer_groupTocustomersInput;

  @TypeGraphQL.Field(_type => CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput, {
    nullable: false
  })
  create!: CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput;
}
