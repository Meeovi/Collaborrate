import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RatingUpdateInput } from "../../../inputs/RatingUpdateInput";
import { RatingWhereUniqueInput } from "../../../inputs/RatingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateRatingArgs {
  @TypeGraphQL.Field(_type => RatingUpdateInput, {
    nullable: false
  })
  data!: RatingUpdateInput;

  @TypeGraphQL.Field(_type => RatingWhereUniqueInput, {
    nullable: false
  })
  where!: RatingWhereUniqueInput;
}
