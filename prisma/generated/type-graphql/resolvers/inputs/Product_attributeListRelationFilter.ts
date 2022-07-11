import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_attributeWhereInput } from "../inputs/Product_attributeWhereInput";

@TypeGraphQL.InputType("Product_attributeListRelationFilter", {
  isAbstract: true
})
export class Product_attributeListRelationFilter {
  @TypeGraphQL.Field(_type => Product_attributeWhereInput, {
    nullable: true
  })
  every?: Product_attributeWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_attributeWhereInput, {
    nullable: true
  })
  some?: Product_attributeWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_attributeWhereInput, {
    nullable: true
  })
  none?: Product_attributeWhereInput | undefined;
}
