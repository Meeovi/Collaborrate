import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateOrConnectWithoutOther_productsInput } from "../inputs/ProductsCreateOrConnectWithoutOther_productsInput";
import { ProductsCreateWithoutOther_productsInput } from "../inputs/ProductsCreateWithoutOther_productsInput";
import { ProductsUpdateWithoutOther_productsInput } from "../inputs/ProductsUpdateWithoutOther_productsInput";
import { ProductsUpsertWithoutOther_productsInput } from "../inputs/ProductsUpsertWithoutOther_productsInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsUpdateOneWithoutOther_productsInput", {
  isAbstract: true
})
export class ProductsUpdateOneWithoutOther_productsInput {
  @TypeGraphQL.Field(_type => ProductsCreateWithoutOther_productsInput, {
    nullable: true
  })
  create?: ProductsCreateWithoutOther_productsInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutOther_productsInput, {
    nullable: true
  })
  connectOrCreate?: ProductsCreateOrConnectWithoutOther_productsInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpsertWithoutOther_productsInput, {
    nullable: true
  })
  upsert?: ProductsUpsertWithoutOther_productsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpdateWithoutOther_productsInput, {
    nullable: true
  })
  update?: ProductsUpdateWithoutOther_productsInput | undefined;
}
