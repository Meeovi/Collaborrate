import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReviewsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ReviewsOrderByWithRelationAndSearchRelevanceInput";
import { ReviewsWhereInput } from "../../../inputs/ReviewsWhereInput";
import { ReviewsWhereUniqueInput } from "../../../inputs/ReviewsWhereUniqueInput";
import { ReviewsScalarFieldEnum } from "../../../../enums/ReviewsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyReviewsArgs {
  @TypeGraphQL.Field(_type => ReviewsWhereInput, {
    nullable: true
  })
  where?: ReviewsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ReviewsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: ReviewsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => ReviewsWhereUniqueInput, {
    nullable: true
  })
  cursor?: ReviewsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ReviewsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "first_name" | "last_name" | "content" | "websites" | "created_at" | "shop_id" | "comment_id"> | undefined;
}
