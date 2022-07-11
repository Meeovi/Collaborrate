import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReviewsCreateManyInput } from "../../../inputs/ReviewsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyReviewsArgs {
  @TypeGraphQL.Field(_type => [ReviewsCreateManyInput], {
    nullable: false
  })
  data!: ReviewsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
