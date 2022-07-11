import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReviewsOrderByWithAggregationInput } from "../../../inputs/ReviewsOrderByWithAggregationInput";
import { ReviewsScalarWhereWithAggregatesInput } from "../../../inputs/ReviewsScalarWhereWithAggregatesInput";
import { ReviewsWhereInput } from "../../../inputs/ReviewsWhereInput";
import { ReviewsScalarFieldEnum } from "../../../../enums/ReviewsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByReviewsArgs {
  @TypeGraphQL.Field(_type => ReviewsWhereInput, {
    nullable: true
  })
  where?: ReviewsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ReviewsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ReviewsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "first_name" | "last_name" | "content" | "websites" | "created_at" | "shop_id" | "comment_id">;

  @TypeGraphQL.Field(_type => ReviewsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ReviewsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
