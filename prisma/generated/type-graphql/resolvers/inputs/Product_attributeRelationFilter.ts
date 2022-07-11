import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_attributeWhereInput } from "../inputs/Product_attributeWhereInput";

@TypeGraphQL.InputType("Product_attributeRelationFilter", {
  isAbstract: true
})
export class Product_attributeRelationFilter {
  @TypeGraphQL.Field(_type => Product_attributeWhereInput, {
    nullable: true
  })
  is?: Product_attributeWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_attributeWhereInput, {
    nullable: true
  })
  isNot?: Product_attributeWhereInput | undefined;
}
