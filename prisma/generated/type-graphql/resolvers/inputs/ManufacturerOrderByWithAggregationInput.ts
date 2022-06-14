import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ManufacturerAvgOrderByAggregateInput } from "../inputs/ManufacturerAvgOrderByAggregateInput";
import { ManufacturerCountOrderByAggregateInput } from "../inputs/ManufacturerCountOrderByAggregateInput";
import { ManufacturerMaxOrderByAggregateInput } from "../inputs/ManufacturerMaxOrderByAggregateInput";
import { ManufacturerMinOrderByAggregateInput } from "../inputs/ManufacturerMinOrderByAggregateInput";
import { ManufacturerSumOrderByAggregateInput } from "../inputs/ManufacturerSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ManufacturerOrderByWithAggregationInput", {
  isAbstract: true
})
export class ManufacturerOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => ManufacturerCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ManufacturerCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ManufacturerAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ManufacturerAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ManufacturerMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ManufacturerMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ManufacturerMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ManufacturerMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ManufacturerSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ManufacturerSumOrderByAggregateInput | undefined;
}
