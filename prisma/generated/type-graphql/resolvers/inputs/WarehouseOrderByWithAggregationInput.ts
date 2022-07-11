import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WarehouseAvgOrderByAggregateInput } from "../inputs/WarehouseAvgOrderByAggregateInput";
import { WarehouseCountOrderByAggregateInput } from "../inputs/WarehouseCountOrderByAggregateInput";
import { WarehouseMaxOrderByAggregateInput } from "../inputs/WarehouseMaxOrderByAggregateInput";
import { WarehouseMinOrderByAggregateInput } from "../inputs/WarehouseMinOrderByAggregateInput";
import { WarehouseSumOrderByAggregateInput } from "../inputs/WarehouseSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("WarehouseOrderByWithAggregationInput", {
  isAbstract: true
})
export class WarehouseOrderByWithAggregationInput {
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
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  city?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  state?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  country?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  postal?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  image?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  products?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  category?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isPublic?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => WarehouseCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: WarehouseCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WarehouseAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: WarehouseAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WarehouseMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: WarehouseMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WarehouseMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: WarehouseMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WarehouseSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: WarehouseSumOrderByAggregateInput | undefined;
}
