import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { Product_attributeUpdateOneRequiredWithoutProduct_attribute_setInput } from "../inputs/Product_attributeUpdateOneRequiredWithoutProduct_attribute_setInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("Product_attribute_setUpdateInput", {
  isAbstract: true
})
export class Product_attribute_setUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  based_on?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => Product_attributeUpdateOneRequiredWithoutProduct_attribute_setInput, {
    nullable: true
  })
  product_attribute?: Product_attributeUpdateOneRequiredWithoutProduct_attribute_setInput | undefined;
}
