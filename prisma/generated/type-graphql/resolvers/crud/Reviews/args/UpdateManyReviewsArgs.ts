import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReviewsUpdateManyMutationInput } from "../../../inputs/ReviewsUpdateManyMutationInput";
import { ReviewsWhereInput } from "../../../inputs/ReviewsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyReviewsArgs {
  @TypeGraphQL.Field(_type => ReviewsUpdateManyMutationInput, {
    nullable: false
  })
  data!: ReviewsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ReviewsWhereInput, {
    nullable: true
  })
  where?: ReviewsWhereInput | undefined;
}
