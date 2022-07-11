import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReviewsWhereInput } from "../../../inputs/ReviewsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyReviewsArgs {
  @TypeGraphQL.Field(_type => ReviewsWhereInput, {
    nullable: true
  })
  where?: ReviewsWhereInput | undefined;
}
