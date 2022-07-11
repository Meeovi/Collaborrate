import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsUpdateWithoutProductsInput } from "../inputs/ProductsUpdateWithoutProductsInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsUpdateWithWhereUniqueWithoutProductsInput", {
  isAbstract: true
})
export class ProductsUpdateWithWhereUniqueWithoutProductsInput {
  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: false
  })
  where!: ProductsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductsUpdateWithoutProductsInput, {
    nullable: false
  })
  data!: ProductsUpdateWithoutProductsInput;
}
