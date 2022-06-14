import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReviewsCreateInput } from "../../../inputs/ReviewsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateReviewsArgs {
  @TypeGraphQL.Field(_type => ReviewsCreateInput, {
    nullable: false
  })
  data!: ReviewsCreateInput;
}
