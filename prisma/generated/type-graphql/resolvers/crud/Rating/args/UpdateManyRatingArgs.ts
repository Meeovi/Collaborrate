import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RatingUpdateManyMutationInput } from "../../../inputs/RatingUpdateManyMutationInput";
import { RatingWhereInput } from "../../../inputs/RatingWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyRatingArgs {
  @TypeGraphQL.Field(_type => RatingUpdateManyMutationInput, {
    nullable: false
  })
  data!: RatingUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => RatingWhereInput, {
    nullable: true
  })
  where?: RatingWhereInput | undefined;
}
