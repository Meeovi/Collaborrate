import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BrandsAvgOrderByAggregateInput } from "../inputs/BrandsAvgOrderByAggregateInput";
import { BrandsCountOrderByAggregateInput } from "../inputs/BrandsCountOrderByAggregateInput";
import { BrandsMaxOrderByAggregateInput } from "../inputs/BrandsMaxOrderByAggregateInput";
import { BrandsMinOrderByAggregateInput } from "../inputs/BrandsMinOrderByAggregateInput";
import { BrandsSumOrderByAggregateInput } from "../inputs/BrandsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BrandsOrderByWithAggregationInput", {
  isAbstract: true
})
export class BrandsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  code?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  country?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  state?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isPublic?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  city?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  product?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  media?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => BrandsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: BrandsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BrandsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: BrandsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BrandsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: BrandsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BrandsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: BrandsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BrandsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: BrandsSumOrderByAggregateInput | undefined;
}
