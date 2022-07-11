import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShipmentsAvgOrderByAggregateInput } from "../inputs/ShipmentsAvgOrderByAggregateInput";
import { ShipmentsCountOrderByAggregateInput } from "../inputs/ShipmentsCountOrderByAggregateInput";
import { ShipmentsMaxOrderByAggregateInput } from "../inputs/ShipmentsMaxOrderByAggregateInput";
import { ShipmentsMinOrderByAggregateInput } from "../inputs/ShipmentsMinOrderByAggregateInput";
import { ShipmentsSumOrderByAggregateInput } from "../inputs/ShipmentsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ShipmentsOrderByWithAggregationInput", {
  isAbstract: true
})
export class ShipmentsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  product?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  speed_grade?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ship_date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  carrier_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  transit_time?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tracking_url?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  image?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  client_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  client_secret?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  country?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  website?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ShipmentsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ShipmentsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ShipmentsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ShipmentsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ShipmentsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ShipmentsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ShipmentsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ShipmentsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ShipmentsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ShipmentsSumOrderByAggregateInput | undefined;
}
