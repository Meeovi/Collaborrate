import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateWithoutOther_productsInput } from "../inputs/ProductsCreateWithoutOther_productsInput";
import { ProductsUpdateWithoutOther_productsInput } from "../inputs/ProductsUpdateWithoutOther_productsInput";

@TypeGraphQL.InputType("ProductsUpsertWithoutOther_productsInput", {
  isAbstract: true
})
export class ProductsUpsertWithoutOther_productsInput {
  @TypeGraphQL.Field(_type => ProductsUpdateWithoutOther_productsInput, {
    nullable: false
  })
  update!: ProductsUpdateWithoutOther_productsInput;

  @TypeGraphQL.Field(_type => ProductsCreateWithoutOther_productsInput, {
    nullable: false
  })
  create!: ProductsCreateWithoutOther_productsInput;
}
