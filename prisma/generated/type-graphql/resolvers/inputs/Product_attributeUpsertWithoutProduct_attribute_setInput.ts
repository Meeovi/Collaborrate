import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_attributeCreateWithoutProduct_attribute_setInput } from "../inputs/Product_attributeCreateWithoutProduct_attribute_setInput";
import { Product_attributeUpdateWithoutProduct_attribute_setInput } from "../inputs/Product_attributeUpdateWithoutProduct_attribute_setInput";

@TypeGraphQL.InputType("Product_attributeUpsertWithoutProduct_attribute_setInput", {
  isAbstract: true
})
export class Product_attributeUpsertWithoutProduct_attribute_setInput {
  @TypeGraphQL.Field(_type => Product_attributeUpdateWithoutProduct_attribute_setInput, {
    nullable: false
  })
  update!: Product_attributeUpdateWithoutProduct_attribute_setInput;

  @TypeGraphQL.Field(_type => Product_attributeCreateWithoutProduct_attribute_setInput, {
    nullable: false
  })
  create!: Product_attributeCreateWithoutProduct_attribute_setInput;
}
