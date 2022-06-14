import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReviewsOrderByWithRelationInput } from "../../../inputs/ReviewsOrderByWithRelationInput";
import { ReviewsWhereInput } from "../../../inputs/ReviewsWhereInput";
import { ReviewsWhereUniqueInput } from "../../../inputs/ReviewsWhereUniqueInput";
import { ReviewsScalarFieldEnum } from "../../../../enums/ReviewsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstReviewsArgs {
  @TypeGraphQL.Field(_type => ReviewsWhereInput, {
    nullable: true
  })
  where?: ReviewsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ReviewsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ReviewsOrderByWithRelationInput[] | undefined;

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
