import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SourceAvgOrderByAggregateInput } from "../inputs/SourceAvgOrderByAggregateInput";
import { SourceCountOrderByAggregateInput } from "../inputs/SourceCountOrderByAggregateInput";
import { SourceMaxOrderByAggregateInput } from "../inputs/SourceMaxOrderByAggregateInput";
import { SourceMinOrderByAggregateInput } from "../inputs/SourceMinOrderByAggregateInput";
import { SourceSumOrderByAggregateInput } from "../inputs/SourceSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SourceOrderByWithAggregationInput", {
  isAbstract: true
})
export class SourceOrderByWithAggregationInput {
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
  code?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  enabled?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  latitude?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  longitude?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  pickup_location?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  contact_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  phone?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  fax?: "asc" | "desc" | undefined;

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
  city?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  street?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  postcode?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SourceCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SourceCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SourceAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SourceAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SourceMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SourceMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SourceMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SourceMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SourceSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SourceSumOrderByAggregateInput | undefined;
}
