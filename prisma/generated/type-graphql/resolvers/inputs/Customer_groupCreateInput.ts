import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateNestedOneWithoutCustomer_group_customer_groupTocustomersInput } from "../inputs/CustomersCreateNestedOneWithoutCustomer_group_customer_groupTocustomersInput";

@TypeGraphQL.InputType("Customer_groupCreateInput", {
  isAbstract: true
})
export class Customer_groupCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  id?: bigint | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tax_class?: string | undefined;

  @TypeGraphQL.Field(_type => CustomersCreateNestedOneWithoutCustomer_group_customer_groupTocustomersInput, {
    nullable: true
  })
  customers?: CustomersCreateNestedOneWithoutCustomer_group_customer_groupTocustomersInput | undefined;
}
