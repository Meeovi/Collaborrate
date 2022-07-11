import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateWithoutProduct_typesInput } from "../inputs/ProductsCreateWithoutProduct_typesInput";
import { ProductsUpdateWithoutProduct_typesInput } from "../inputs/ProductsUpdateWithoutProduct_typesInput";

@TypeGraphQL.InputType("ProductsUpsertWithoutProduct_typesInput", {
  isAbstract: true
})
export class ProductsUpsertWithoutProduct_typesInput {
  @TypeGraphQL.Field(_type => ProductsUpdateWithoutProduct_typesInput, {
    nullable: false
  })
  update!: ProductsUpdateWithoutProduct_typesInput;

  @TypeGraphQL.Field(_type => ProductsCreateWithoutProduct_typesInput, {
    nullable: false
  })
  create!: ProductsCreateWithoutProduct_typesInput;
}
