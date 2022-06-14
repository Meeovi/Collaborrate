import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateOrConnectWithoutCredit_memosInput } from "../inputs/ProductsCreateOrConnectWithoutCredit_memosInput";
import { ProductsCreateWithoutCredit_memosInput } from "../inputs/ProductsCreateWithoutCredit_memosInput";
import { ProductsUpdateWithoutCredit_memosInput } from "../inputs/ProductsUpdateWithoutCredit_memosInput";
import { ProductsUpsertWithoutCredit_memosInput } from "../inputs/ProductsUpsertWithoutCredit_memosInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsUpdateOneRequiredWithoutCredit_memosInput", {
  isAbstract: true
})
export class ProductsUpdateOneRequiredWithoutCredit_memosInput {
  @TypeGraphQL.Field(_type => ProductsCreateWithoutCredit_memosInput, {
    nullable: true
  })
  create?: ProductsCreateWithoutCredit_memosInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutCredit_memosInput, {
    nullable: true
  })
  connectOrCreate?: ProductsCreateOrConnectWithoutCredit_memosInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpsertWithoutCredit_memosInput, {
    nullable: true
  })
  upsert?: ProductsUpsertWithoutCredit_memosInput | undefined;

  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpdateWithoutCredit_memosInput, {
    nullable: true
  })
  update?: ProductsUpdateWithoutCredit_memosInput | undefined;
}
