import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_attribute_setWhereInput } from "../inputs/Product_attribute_setWhereInput";

@TypeGraphQL.InputType("Product_attribute_setListRelationFilter", {
  isAbstract: true
})
export class Product_attribute_setListRelationFilter {
  @TypeGraphQL.Field(_type => Product_attribute_setWhereInput, {
    nullable: true
  })
  every?: Product_attribute_setWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_attribute_setWhereInput, {
    nullable: true
  })
  some?: Product_attribute_setWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_attribute_setWhereInput, {
    nullable: true
  })
  none?: Product_attribute_setWhereInput | undefined;
}
