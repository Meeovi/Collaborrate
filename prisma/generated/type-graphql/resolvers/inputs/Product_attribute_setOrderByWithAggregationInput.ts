import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_attribute_setAvgOrderByAggregateInput } from "../inputs/Product_attribute_setAvgOrderByAggregateInput";
import { Product_attribute_setCountOrderByAggregateInput } from "../inputs/Product_attribute_setCountOrderByAggregateInput";
import { Product_attribute_setMaxOrderByAggregateInput } from "../inputs/Product_attribute_setMaxOrderByAggregateInput";
import { Product_attribute_setMinOrderByAggregateInput } from "../inputs/Product_attribute_setMinOrderByAggregateInput";
import { Product_attribute_setSumOrderByAggregateInput } from "../inputs/Product_attribute_setSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_attribute_setOrderByWithAggregationInput", {
  isAbstract: true
})
export class Product_attribute_setOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => Product_attribute_setCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Product_attribute_setCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_attribute_setAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Product_attribute_setAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_attribute_setMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Product_attribute_setMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_attribute_setMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Product_attribute_setMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_attribute_setSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Product_attribute_setSumOrderByAggregateInput | undefined;
}
