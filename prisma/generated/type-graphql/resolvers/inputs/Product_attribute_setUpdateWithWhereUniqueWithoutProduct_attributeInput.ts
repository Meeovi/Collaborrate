import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_attribute_setUpdateWithoutProduct_attributeInput } from "../inputs/Product_attribute_setUpdateWithoutProduct_attributeInput";
import { Product_attribute_setWhereUniqueInput } from "../inputs/Product_attribute_setWhereUniqueInput";

@TypeGraphQL.InputType("Product_attribute_setUpdateWithWhereUniqueWithoutProduct_attributeInput", {
  isAbstract: true
})
export class Product_attribute_setUpdateWithWhereUniqueWithoutProduct_attributeInput {
  @TypeGraphQL.Field(_type => Product_attribute_setWhereUniqueInput, {
    nullable: false
  })
  where!: Product_attribute_setWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_attribute_setUpdateWithoutProduct_attributeInput, {
    nullable: false
  })
  data!: Product_attribute_setUpdateWithoutProduct_attributeInput;
}
