import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReviewsCreateInput } from "../../../inputs/ReviewsCreateInput";
import { ReviewsUpdateInput } from "../../../inputs/ReviewsUpdateInput";
import { ReviewsWhereUniqueInput } from "../../../inputs/ReviewsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertReviewsArgs {
  @TypeGraphQL.Field(_type => ReviewsWhereUniqueInput, {
    nullable: false
  })
  where!: ReviewsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReviewsCreateInput, {
    nullable: false
  })
  create!: ReviewsCreateInput;

  @TypeGraphQL.Field(_type => ReviewsUpdateInput, {
    nullable: false
  })
  update!: ReviewsUpdateInput;
}
