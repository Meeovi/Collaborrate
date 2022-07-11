import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RatingCreateInput } from "../../../inputs/RatingCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneRatingArgs {
  @TypeGraphQL.Field(_type => RatingCreateInput, {
    nullable: false
  })
  data!: RatingCreateInput;
}
