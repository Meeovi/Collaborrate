import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateOrConnectWithoutCredit_memosInput } from "../inputs/CustomersCreateOrConnectWithoutCredit_memosInput";
import { CustomersCreateWithoutCredit_memosInput } from "../inputs/CustomersCreateWithoutCredit_memosInput";
import { CustomersUpdateWithoutCredit_memosInput } from "../inputs/CustomersUpdateWithoutCredit_memosInput";
import { CustomersUpsertWithoutCredit_memosInput } from "../inputs/CustomersUpsertWithoutCredit_memosInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";

@TypeGraphQL.InputType("CustomersUpdateOneRequiredWithoutCredit_memosNestedInput", {
  isAbstract: true
})
export class CustomersUpdateOneRequiredWithoutCredit_memosNestedInput {
  @TypeGraphQL.Field(_type => CustomersCreateWithoutCredit_memosInput, {
    nullable: true
  })
  create?: CustomersCreateWithoutCredit_memosInput | undefined;

  @TypeGraphQL.Field(_type => CustomersCreateOrConnectWithoutCredit_memosInput, {
    nullable: true
  })
  connectOrCreate?: CustomersCreateOrConnectWithoutCredit_memosInput | undefined;

  @TypeGraphQL.Field(_type => CustomersUpsertWithoutCredit_memosInput, {
    nullable: true
  })
  upsert?: CustomersUpsertWithoutCredit_memosInput | undefined;

  @TypeGraphQL.Field(_type => CustomersWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CustomersUpdateWithoutCredit_memosInput, {
    nullable: true
  })
  update?: CustomersUpdateWithoutCredit_memosInput | undefined;
}
