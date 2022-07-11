import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateOrConnectWithoutCustomer_paymentInput } from "../inputs/CustomersCreateOrConnectWithoutCustomer_paymentInput";
import { CustomersCreateWithoutCustomer_paymentInput } from "../inputs/CustomersCreateWithoutCustomer_paymentInput";
import { CustomersUpdateWithoutCustomer_paymentInput } from "../inputs/CustomersUpdateWithoutCustomer_paymentInput";
import { CustomersUpsertWithoutCustomer_paymentInput } from "../inputs/CustomersUpsertWithoutCustomer_paymentInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";

@TypeGraphQL.InputType("CustomersUpdateOneRequiredWithoutCustomer_paymentNestedInput", {
  isAbstract: true
})
export class CustomersUpdateOneRequiredWithoutCustomer_paymentNestedInput {
  @TypeGraphQL.Field(_type => CustomersCreateWithoutCustomer_paymentInput, {
    nullable: true
  })
  create?: CustomersCreateWithoutCustomer_paymentInput | undefined;

  @TypeGraphQL.Field(_type => CustomersCreateOrConnectWithoutCustomer_paymentInput, {
    nullable: true
  })
  connectOrCreate?: CustomersCreateOrConnectWithoutCustomer_paymentInput | undefined;

  @TypeGraphQL.Field(_type => CustomersUpsertWithoutCustomer_paymentInput, {
    nullable: true
  })
  upsert?: CustomersUpsertWithoutCustomer_paymentInput | undefined;

  @TypeGraphQL.Field(_type => CustomersWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CustomersUpdateWithoutCustomer_paymentInput, {
    nullable: true
  })
  update?: CustomersUpdateWithoutCustomer_paymentInput | undefined;
}
