import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_paymentCreateOrConnectWithoutCustomersInput } from "../inputs/Customer_paymentCreateOrConnectWithoutCustomersInput";
import { Customer_paymentCreateWithoutCustomersInput } from "../inputs/Customer_paymentCreateWithoutCustomersInput";
import { Customer_paymentUpdateWithoutCustomersInput } from "../inputs/Customer_paymentUpdateWithoutCustomersInput";
import { Customer_paymentUpsertWithoutCustomersInput } from "../inputs/Customer_paymentUpsertWithoutCustomersInput";
import { Customer_paymentWhereUniqueInput } from "../inputs/Customer_paymentWhereUniqueInput";

@TypeGraphQL.InputType("Customer_paymentUpdateOneWithoutCustomersNestedInput", {
  isAbstract: true
})
export class Customer_paymentUpdateOneWithoutCustomersNestedInput {
  @TypeGraphQL.Field(_type => Customer_paymentCreateWithoutCustomersInput, {
    nullable: true
  })
  create?: Customer_paymentCreateWithoutCustomersInput | undefined;

  @TypeGraphQL.Field(_type => Customer_paymentCreateOrConnectWithoutCustomersInput, {
    nullable: true
  })
  connectOrCreate?: Customer_paymentCreateOrConnectWithoutCustomersInput | undefined;

  @TypeGraphQL.Field(_type => Customer_paymentUpsertWithoutCustomersInput, {
    nullable: true
  })
  upsert?: Customer_paymentUpsertWithoutCustomersInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => Customer_paymentWhereUniqueInput, {
    nullable: true
  })
  connect?: Customer_paymentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Customer_paymentUpdateWithoutCustomersInput, {
    nullable: true
  })
  update?: Customer_paymentUpdateWithoutCustomersInput | undefined;
}
