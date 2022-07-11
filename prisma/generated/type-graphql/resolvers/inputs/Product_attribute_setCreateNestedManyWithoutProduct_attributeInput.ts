import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_attribute_setCreateManyProduct_attributeInputEnvelope } from "../inputs/Product_attribute_setCreateManyProduct_attributeInputEnvelope";
import { Product_attribute_setCreateOrConnectWithoutProduct_attributeInput } from "../inputs/Product_attribute_setCreateOrConnectWithoutProduct_attributeInput";
import { Product_attribute_setCreateWithoutProduct_attributeInput } from "../inputs/Product_attribute_setCreateWithoutProduct_attributeInput";
import { Product_attribute_setWhereUniqueInput } from "../inputs/Product_attribute_setWhereUniqueInput";

@TypeGraphQL.InputType("Product_attribute_setCreateNestedManyWithoutProduct_attributeInput", {
  isAbstract: true
})
export class Product_attribute_setCreateNestedManyWithoutProduct_attributeInput {
  @TypeGraphQL.Field(_type => [Product_attribute_setCreateWithoutProduct_attributeInput], {
    nullable: true
  })
  create?: Product_attribute_setCreateWithoutProduct_attributeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_attribute_setCreateOrConnectWithoutProduct_attributeInput], {
    nullable: true
  })
  connectOrCreate?: Product_attribute_setCreateOrConnectWithoutProduct_attributeInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_attribute_setCreateManyProduct_attributeInputEnvelope, {
    nullable: true
  })
  createMany?: Product_attribute_setCreateManyProduct_attributeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_attribute_setWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_attribute_setWhereUniqueInput[] | undefined;
}
