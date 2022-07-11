import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_attributeCreateNestedOneWithoutProduct_attribute_setInput } from "../inputs/Product_attributeCreateNestedOneWithoutProduct_attribute_setInput";

@TypeGraphQL.InputType("Product_attribute_setCreateInput", {
  isAbstract: true
})
export class Product_attribute_setCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  based_on?: string | undefined;

  @TypeGraphQL.Field(_type => Product_attributeCreateNestedOneWithoutProduct_attribute_setInput, {
    nullable: true
  })
  product_attribute?: Product_attributeCreateNestedOneWithoutProduct_attribute_setInput | undefined;
}
