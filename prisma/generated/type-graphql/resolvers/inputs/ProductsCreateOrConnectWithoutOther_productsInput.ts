import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateWithoutOther_productsInput } from "../inputs/ProductsCreateWithoutOther_productsInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsCreateOrConnectWithoutOther_productsInput", {
  isAbstract: true
})
export class ProductsCreateOrConnectWithoutOther_productsInput {
  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: false
  })
  where!: ProductsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductsCreateWithoutOther_productsInput, {
    nullable: false
  })
  create!: ProductsCreateWithoutOther_productsInput;
}
