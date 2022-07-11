import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_attributeCreateOrConnectWithoutProduct_attribute_setInput } from "../inputs/Product_attributeCreateOrConnectWithoutProduct_attribute_setInput";
import { Product_attributeCreateWithoutProduct_attribute_setInput } from "../inputs/Product_attributeCreateWithoutProduct_attribute_setInput";
import { Product_attributeUpdateWithoutProduct_attribute_setInput } from "../inputs/Product_attributeUpdateWithoutProduct_attribute_setInput";
import { Product_attributeUpsertWithoutProduct_attribute_setInput } from "../inputs/Product_attributeUpsertWithoutProduct_attribute_setInput";
import { Product_attributeWhereUniqueInput } from "../inputs/Product_attributeWhereUniqueInput";

@TypeGraphQL.InputType("Product_attributeUpdateOneRequiredWithoutProduct_attribute_setNestedInput", {
  isAbstract: true
})
export class Product_attributeUpdateOneRequiredWithoutProduct_attribute_setNestedInput {
  @TypeGraphQL.Field(_type => Product_attributeCreateWithoutProduct_attribute_setInput, {
    nullable: true
  })
  create?: Product_attributeCreateWithoutProduct_attribute_setInput | undefined;

  @TypeGraphQL.Field(_type => Product_attributeCreateOrConnectWithoutProduct_attribute_setInput, {
    nullable: true
  })
  connectOrCreate?: Product_attributeCreateOrConnectWithoutProduct_attribute_setInput | undefined;

  @TypeGraphQL.Field(_type => Product_attributeUpsertWithoutProduct_attribute_setInput, {
    nullable: true
  })
  upsert?: Product_attributeUpsertWithoutProduct_attribute_setInput | undefined;

  @TypeGraphQL.Field(_type => Product_attributeWhereUniqueInput, {
    nullable: true
  })
  connect?: Product_attributeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Product_attributeUpdateWithoutProduct_attribute_setInput, {
    nullable: true
  })
  update?: Product_attributeUpdateWithoutProduct_attribute_setInput | undefined;
}
