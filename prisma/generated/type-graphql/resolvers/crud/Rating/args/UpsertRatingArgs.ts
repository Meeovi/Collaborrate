import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RatingCreateInput } from "../../../inputs/RatingCreateInput";
import { RatingUpdateInput } from "../../../inputs/RatingUpdateInput";
import { RatingWhereUniqueInput } from "../../../inputs/RatingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertRatingArgs {
  @TypeGraphQL.Field(_type => RatingWhereUniqueInput, {
    nullable: false
  })
  where!: RatingWhereUniqueInput;

  @TypeGraphQL.Field(_type => RatingCreateInput, {
    nullable: false
  })
  create!: RatingCreateInput;

  @TypeGraphQL.Field(_type => RatingUpdateInput, {
    nullable: false
  })
  update!: RatingUpdateInput;
}
