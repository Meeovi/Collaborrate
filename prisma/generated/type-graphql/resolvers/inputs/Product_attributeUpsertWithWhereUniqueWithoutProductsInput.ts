import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_attributeCreateWithoutProductsInput } from "../inputs/Product_attributeCreateWithoutProductsInput";
import { Product_attributeUpdateWithoutProductsInput } from "../inputs/Product_attributeUpdateWithoutProductsInput";
import { Product_attributeWhereUniqueInput } from "../inputs/Product_attributeWhereUniqueInput";

@TypeGraphQL.InputType("Product_attributeUpsertWithWhereUniqueWithoutProductsInput", {
  isAbstract: true
})
export class Product_attributeUpsertWithWhereUniqueWithoutProductsInput {
  @TypeGraphQL.Field(_type => Product_attributeWhereUniqueInput, {
    nullable: false
  })
  where!: Product_attributeWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_attributeUpdateWithoutProductsInput, {
    nullable: false
  })
  update!: Product_attributeUpdateWithoutProductsInput;

  @TypeGraphQL.Field(_type => Product_attributeCreateWithoutProductsInput, {
    nullable: false
  })
  create!: Product_attributeCreateWithoutProductsInput;
}
