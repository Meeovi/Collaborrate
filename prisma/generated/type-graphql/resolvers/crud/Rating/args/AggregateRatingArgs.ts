import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RatingOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/RatingOrderByWithRelationAndSearchRelevanceInput";
import { RatingWhereInput } from "../../../inputs/RatingWhereInput";
import { RatingWhereUniqueInput } from "../../../inputs/RatingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateRatingArgs {
  @TypeGraphQL.Field(_type => RatingWhereInput, {
    nullable: true
  })
  where?: RatingWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RatingOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: RatingOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => RatingWhereUniqueInput, {
    nullable: true
  })
  cursor?: RatingWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
