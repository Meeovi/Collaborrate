import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReviewsWhereUniqueInput } from "../../../inputs/ReviewsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneReviewsArgs {
  @TypeGraphQL.Field(_type => ReviewsWhereUniqueInput, {
    nullable: false
  })
  where!: ReviewsWhereUniqueInput;
}
