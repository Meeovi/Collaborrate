import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_attributeOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Product_attributeOrderByWithRelationAndSearchRelevanceInput";
import { Product_attribute_setOrderByRelevanceInput } from "../inputs/Product_attribute_setOrderByRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_attribute_setOrderByWithRelationAndSearchRelevanceInput", {
  isAbstract: true
})
export class Product_attribute_setOrderByWithRelationAndSearchRelevanceInput {
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

  @TypeGraphQL.Field(_type => Product_attributeOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  product_attribute?: Product_attributeOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Product_attribute_setOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Product_attribute_setOrderByRelevanceInput | undefined;
}
