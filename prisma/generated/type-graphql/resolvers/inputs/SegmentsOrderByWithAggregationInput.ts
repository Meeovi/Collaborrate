import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SegmentsAvgOrderByAggregateInput } from "../inputs/SegmentsAvgOrderByAggregateInput";
import { SegmentsCountOrderByAggregateInput } from "../inputs/SegmentsCountOrderByAggregateInput";
import { SegmentsMaxOrderByAggregateInput } from "../inputs/SegmentsMaxOrderByAggregateInput";
import { SegmentsMinOrderByAggregateInput } from "../inputs/SegmentsMinOrderByAggregateInput";
import { SegmentsSumOrderByAggregateInput } from "../inputs/SegmentsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SegmentsOrderByWithAggregationInput", {
  isAbstract: true
})
export class SegmentsOrderByWithAggregationInput {
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
  website?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  apply_to?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  customers?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SegmentsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SegmentsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SegmentsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SegmentsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SegmentsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SegmentsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SegmentsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SegmentsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SegmentsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SegmentsSumOrderByAggregateInput | undefined;
}
