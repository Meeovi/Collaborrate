import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_attributeCreateWithoutProductsInput } from "../inputs/Product_attributeCreateWithoutProductsInput";
import { Product_attributeWhereUniqueInput } from "../inputs/Product_attributeWhereUniqueInput";

@TypeGraphQL.InputType("Product_attributeCreateOrConnectWithoutProductsInput", {
  isAbstract: true
})
export class Product_attributeCreateOrConnectWithoutProductsInput {
  @TypeGraphQL.Field(_type => Product_attributeWhereUniqueInput, {
    nullable: false
  })
  where!: Product_attributeWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_attributeCreateWithoutProductsInput, {
    nullable: false
  })
  create!: Product_attributeCreateWithoutProductsInput;
}
