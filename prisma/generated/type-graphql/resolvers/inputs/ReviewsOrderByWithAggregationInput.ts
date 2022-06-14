import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewsAvgOrderByAggregateInput } from "../inputs/ReviewsAvgOrderByAggregateInput";
import { ReviewsCountOrderByAggregateInput } from "../inputs/ReviewsCountOrderByAggregateInput";
import { ReviewsMaxOrderByAggregateInput } from "../inputs/ReviewsMaxOrderByAggregateInput";
import { ReviewsMinOrderByAggregateInput } from "../inputs/ReviewsMinOrderByAggregateInput";
import { ReviewsSumOrderByAggregateInput } from "../inputs/ReviewsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ReviewsOrderByWithAggregationInput", {
  isAbstract: true
})
export class ReviewsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  first_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  last_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  content?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  websites?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  shop_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  comment_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ReviewsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ReviewsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReviewsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ReviewsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReviewsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ReviewsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReviewsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ReviewsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReviewsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ReviewsSumOrderByAggregateInput | undefined;
}
