import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateWithoutReturnsInput } from "../inputs/ProductsCreateWithoutReturnsInput";
import { ProductsUpdateWithoutReturnsInput } from "../inputs/ProductsUpdateWithoutReturnsInput";

@TypeGraphQL.InputType("ProductsUpsertWithoutReturnsInput", {
  isAbstract: true
})
export class ProductsUpsertWithoutReturnsInput {
  @TypeGraphQL.Field(_type => ProductsUpdateWithoutReturnsInput, {
    nullable: false
  })
  update!: ProductsUpdateWithoutReturnsInput;

  @TypeGraphQL.Field(_type => ProductsCreateWithoutReturnsInput, {
    nullable: false
  })
  create!: ProductsCreateWithoutReturnsInput;
}
