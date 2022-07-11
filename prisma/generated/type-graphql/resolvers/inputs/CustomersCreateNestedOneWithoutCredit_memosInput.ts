import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateOrConnectWithoutCredit_memosInput } from "../inputs/CustomersCreateOrConnectWithoutCredit_memosInput";
import { CustomersCreateWithoutCredit_memosInput } from "../inputs/CustomersCreateWithoutCredit_memosInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";

@TypeGraphQL.InputType("CustomersCreateNestedOneWithoutCredit_memosInput", {
  isAbstract: true
})
export class CustomersCreateNestedOneWithoutCredit_memosInput {
  @TypeGraphQL.Field(_type => CustomersCreateWithoutCredit_memosInput, {
    nullable: true
  })
  create?: CustomersCreateWithoutCredit_memosInput | undefined;

  @TypeGraphQL.Field(_type => CustomersCreateOrConnectWithoutCredit_memosInput, {
    nullable: true
  })
  connectOrCreate?: CustomersCreateOrConnectWithoutCredit_memosInput | undefined;

  @TypeGraphQL.Field(_type => CustomersWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomersWhereUniqueInput | undefined;
}
