import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReviewsUpdateInput } from "../../../inputs/ReviewsUpdateInput";
import { ReviewsWhereUniqueInput } from "../../../inputs/ReviewsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneReviewsArgs {
  @TypeGraphQL.Field(_type => ReviewsUpdateInput, {
    nullable: false
  })
  data!: ReviewsUpdateInput;

  @TypeGraphQL.Field(_type => ReviewsWhereUniqueInput, {
    nullable: false
  })
  where!: ReviewsWhereUniqueInput;
}
