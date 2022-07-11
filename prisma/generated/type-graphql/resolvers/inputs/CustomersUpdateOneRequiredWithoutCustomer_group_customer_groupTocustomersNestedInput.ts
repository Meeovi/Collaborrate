import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateOrConnectWithoutCustomer_group_customer_groupTocustomersInput } from "../inputs/CustomersCreateOrConnectWithoutCustomer_group_customer_groupTocustomersInput";
import { CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput } from "../inputs/CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput";
import { CustomersUpdateWithoutCustomer_group_customer_groupTocustomersInput } from "../inputs/CustomersUpdateWithoutCustomer_group_customer_groupTocustomersInput";
import { CustomersUpsertWithoutCustomer_group_customer_groupTocustomersInput } from "../inputs/CustomersUpsertWithoutCustomer_group_customer_groupTocustomersInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";

@TypeGraphQL.InputType("CustomersUpdateOneRequiredWithoutCustomer_group_customer_groupTocustomersNestedInput", {
  isAbstract: true
})
export class CustomersUpdateOneRequiredWithoutCustomer_group_customer_groupTocustomersNestedInput {
  @TypeGraphQL.Field(_type => CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput, {
    nullable: true
  })
  create?: CustomersCreateWithoutCustomer_group_customer_groupTocustomersInput | undefined;

  @TypeGraphQL.Field(_type => CustomersCreateOrConnectWithoutCustomer_group_customer_groupTocustomersInput, {
    nullable: true
  })
  connectOrCreate?: CustomersCreateOrConnectWithoutCustomer_group_customer_groupTocustomersInput | undefined;

  @TypeGraphQL.Field(_type => CustomersUpsertWithoutCustomer_group_customer_groupTocustomersInput, {
    nullable: true
  })
  upsert?: CustomersUpsertWithoutCustomer_group_customer_groupTocustomersInput | undefined;

  @TypeGraphQL.Field(_type => CustomersWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CustomersUpdateWithoutCustomer_group_customer_groupTocustomersInput, {
    nullable: true
  })
  update?: CustomersUpdateWithoutCustomer_group_customer_groupTocustomersInput | undefined;
}
