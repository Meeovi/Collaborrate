import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateWithoutProduct_attributeInput } from "../inputs/ProductsCreateWithoutProduct_attributeInput";
import { ProductsUpdateWithoutProduct_attributeInput } from "../inputs/ProductsUpdateWithoutProduct_attributeInput";

@TypeGraphQL.InputType("ProductsUpsertWithoutProduct_attributeInput", {
  isAbstract: true
})
export class ProductsUpsertWithoutProduct_attributeInput {
  @TypeGraphQL.Field(_type => ProductsUpdateWithoutProduct_attributeInput, {
    nullable: false
  })
  update!: ProductsUpdateWithoutProduct_attributeInput;

  @TypeGraphQL.Field(_type => ProductsCreateWithoutProduct_attributeInput, {
    nullable: false
  })
  create!: ProductsCreateWithoutProduct_attributeInput;
}
