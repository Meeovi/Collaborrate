import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ZonesAvgOrderByAggregateInput } from "../inputs/ZonesAvgOrderByAggregateInput";
import { ZonesCountOrderByAggregateInput } from "../inputs/ZonesCountOrderByAggregateInput";
import { ZonesMaxOrderByAggregateInput } from "../inputs/ZonesMaxOrderByAggregateInput";
import { ZonesMinOrderByAggregateInput } from "../inputs/ZonesMinOrderByAggregateInput";
import { ZonesSumOrderByAggregateInput } from "../inputs/ZonesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ZonesOrderByWithAggregationInput", {
  isAbstract: true
})
export class ZonesOrderByWithAggregationInput {
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
  updated_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  scope?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  country?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  code?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ZonesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ZonesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ZonesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ZonesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ZonesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ZonesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ZonesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ZonesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ZonesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ZonesSumOrderByAggregateInput | undefined;
}
