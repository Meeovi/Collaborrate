import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_attributeCreateWithoutProduct_attribute_setInput } from "../inputs/Product_attributeCreateWithoutProduct_attribute_setInput";
import { Product_attributeWhereUniqueInput } from "../inputs/Product_attributeWhereUniqueInput";

@TypeGraphQL.InputType("Product_attributeCreateOrConnectWithoutProduct_attribute_setInput", {
  isAbstract: true
})
export class Product_attributeCreateOrConnectWithoutProduct_attribute_setInput {
  @TypeGraphQL.Field(_type => Product_attributeWhereUniqueInput, {
    nullable: false
  })
  where!: Product_attributeWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_attributeCreateWithoutProduct_attribute_setInput, {
    nullable: false
  })
  create!: Product_attributeCreateWithoutProduct_attribute_setInput;
}
