import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateWithoutProductsInput } from "../inputs/ProductsCreateWithoutProductsInput";
import { ProductsUpdateWithoutProductsInput } from "../inputs/ProductsUpdateWithoutProductsInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsUpsertWithWhereUniqueWithoutProductsInput", {
  isAbstract: true
})
export class ProductsUpsertWithWhereUniqueWithoutProductsInput {
  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: false
  })
  where!: ProductsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductsUpdateWithoutProductsInput, {
    nullable: false
  })
  update!: ProductsUpdateWithoutProductsInput;

  @TypeGraphQL.Field(_type => ProductsCreateWithoutProductsInput, {
    nullable: false
  })
  create!: ProductsCreateWithoutProductsInput;
}
