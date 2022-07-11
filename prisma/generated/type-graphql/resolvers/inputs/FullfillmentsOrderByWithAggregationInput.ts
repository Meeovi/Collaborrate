import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FullfillmentsAvgOrderByAggregateInput } from "../inputs/FullfillmentsAvgOrderByAggregateInput";
import { FullfillmentsCountOrderByAggregateInput } from "../inputs/FullfillmentsCountOrderByAggregateInput";
import { FullfillmentsMaxOrderByAggregateInput } from "../inputs/FullfillmentsMaxOrderByAggregateInput";
import { FullfillmentsMinOrderByAggregateInput } from "../inputs/FullfillmentsMinOrderByAggregateInput";
import { FullfillmentsSumOrderByAggregateInput } from "../inputs/FullfillmentsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FullfillmentsOrderByWithAggregationInput", {
  isAbstract: true
})
export class FullfillmentsOrderByWithAggregationInput {
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
  shipping_zones?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  company?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  address?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  address_two?: "asc" | "desc" | undefined;

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
  zipcode?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  country?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  country_area?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  phone?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  pickup?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  stock?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FullfillmentsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: FullfillmentsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FullfillmentsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: FullfillmentsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FullfillmentsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: FullfillmentsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FullfillmentsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: FullfillmentsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FullfillmentsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: FullfillmentsSumOrderByAggregateInput | undefined;
}
