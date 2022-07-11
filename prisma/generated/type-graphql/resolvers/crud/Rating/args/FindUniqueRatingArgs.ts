import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RatingWhereUniqueInput } from "../../../inputs/RatingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueRatingArgs {
  @TypeGraphQL.Field(_type => RatingWhereUniqueInput, {
    nullable: false
  })
  where!: RatingWhereUniqueInput;
}
