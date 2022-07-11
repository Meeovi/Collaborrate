import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Tax_rateAvgOrderByAggregateInput } from "../inputs/Tax_rateAvgOrderByAggregateInput";
import { Tax_rateCountOrderByAggregateInput } from "../inputs/Tax_rateCountOrderByAggregateInput";
import { Tax_rateMaxOrderByAggregateInput } from "../inputs/Tax_rateMaxOrderByAggregateInput";
import { Tax_rateMinOrderByAggregateInput } from "../inputs/Tax_rateMinOrderByAggregateInput";
import { Tax_rateSumOrderByAggregateInput } from "../inputs/Tax_rateSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Tax_rateOrderByWithAggregationInput", {
  isAbstract: true
})
export class Tax_rateOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tax_identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  zip_post_is_range?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  postcode?: "asc" | "desc" | undefined;

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
  rate_percent?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  default_store_view?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  prod_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Tax_rateCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Tax_rateCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Tax_rateAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Tax_rateAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Tax_rateMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Tax_rateMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Tax_rateMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Tax_rateMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Tax_rateSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Tax_rateSumOrderByAggregateInput | undefined;
}
