import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_attributeOrderByWithRelationInput } from "../inputs/Product_attributeOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_attribute_setOrderByWithRelationInput", {
  isAbstract: true
})
export class Product_attribute_setOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  based_on?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  attribute_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Product_attributeOrderByWithRelationInput, {
    nullable: true
  })
  product_attribute?: Product_attributeOrderByWithRelationInput | undefined;
}
