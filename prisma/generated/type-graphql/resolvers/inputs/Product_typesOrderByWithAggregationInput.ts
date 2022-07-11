import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_typesAvgOrderByAggregateInput } from "../inputs/Product_typesAvgOrderByAggregateInput";
import { Product_typesCountOrderByAggregateInput } from "../inputs/Product_typesCountOrderByAggregateInput";
import { Product_typesMaxOrderByAggregateInput } from "../inputs/Product_typesMaxOrderByAggregateInput";
import { Product_typesMinOrderByAggregateInput } from "../inputs/Product_typesMinOrderByAggregateInput";
import { Product_typesSumOrderByAggregateInput } from "../inputs/Product_typesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_typesOrderByWithAggregationInput", {
  isAbstract: true
})
export class Product_typesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  taxes?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isShippable?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  meta_url?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  meta_description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  filter_options?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  product_type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  prod_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Product_typesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Product_typesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_typesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Product_typesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_typesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Product_typesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_typesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Product_typesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_typesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Product_typesSumOrderByAggregateInput | undefined;
}
