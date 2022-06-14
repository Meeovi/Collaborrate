import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateOrConnectWithoutOther_productsInput } from "../inputs/ProductsCreateOrConnectWithoutOther_productsInput";
import { ProductsCreateWithoutOther_productsInput } from "../inputs/ProductsCreateWithoutOther_productsInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsCreateNestedOneWithoutOther_productsInput", {
  isAbstract: true
})
export class ProductsCreateNestedOneWithoutOther_productsInput {
  @TypeGraphQL.Field(_type => ProductsCreateWithoutOther_productsInput, {
    nullable: true
  })
  create?: ProductsCreateWithoutOther_productsInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutOther_productsInput, {
    nullable: true
  })
  connectOrCreate?: ProductsCreateOrConnectWithoutOther_productsInput | undefined;

  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductsWhereUniqueInput | undefined;
}
