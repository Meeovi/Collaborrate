import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsAvgOrderByAggregateInput } from "../inputs/CommentsAvgOrderByAggregateInput";
import { CommentsCountOrderByAggregateInput } from "../inputs/CommentsCountOrderByAggregateInput";
import { CommentsMaxOrderByAggregateInput } from "../inputs/CommentsMaxOrderByAggregateInput";
import { CommentsMinOrderByAggregateInput } from "../inputs/CommentsMinOrderByAggregateInput";
import { CommentsSumOrderByAggregateInput } from "../inputs/CommentsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CommentsOrderByWithAggregationInput", {
  isAbstract: true
})
export class CommentsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  customer_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  image?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  response?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  published?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cust_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CommentsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CommentsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CommentsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CommentsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CommentsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CommentsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CommentsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CommentsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CommentsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CommentsSumOrderByAggregateInput | undefined;
}
