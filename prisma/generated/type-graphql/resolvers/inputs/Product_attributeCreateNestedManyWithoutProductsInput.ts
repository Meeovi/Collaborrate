import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_attributeCreateManyProductsInputEnvelope } from "../inputs/Product_attributeCreateManyProductsInputEnvelope";
import { Product_attributeCreateOrConnectWithoutProductsInput } from "../inputs/Product_attributeCreateOrConnectWithoutProductsInput";
import { Product_attributeCreateWithoutProductsInput } from "../inputs/Product_attributeCreateWithoutProductsInput";
import { Product_attributeWhereUniqueInput } from "../inputs/Product_attributeWhereUniqueInput";

@TypeGraphQL.InputType("Product_attributeCreateNestedManyWithoutProductsInput", {
  isAbstract: true
})
export class Product_attributeCreateNestedManyWithoutProductsInput {
  @TypeGraphQL.Field(_type => [Product_attributeCreateWithoutProductsInput], {
    nullable: true
  })
  create?: Product_attributeCreateWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_attributeCreateOrConnectWithoutProductsInput], {
    nullable: true
  })
  connectOrCreate?: Product_attributeCreateOrConnectWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_attributeCreateManyProductsInputEnvelope, {
    nullable: true
  })
  createMany?: Product_attributeCreateManyProductsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_attributeWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_attributeWhereUniqueInput[] | undefined;
}
