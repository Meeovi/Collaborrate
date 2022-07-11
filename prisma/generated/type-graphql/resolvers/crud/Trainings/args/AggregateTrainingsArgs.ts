import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrainingsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/TrainingsOrderByWithRelationAndSearchRelevanceInput";
import { TrainingsWhereInput } from "../../../inputs/TrainingsWhereInput";
import { TrainingsWhereUniqueInput } from "../../../inputs/TrainingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTrainingsArgs {
  @TypeGraphQL.Field(_type => TrainingsWhereInput, {
    nullable: true
  })
  where?: TrainingsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TrainingsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: TrainingsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => TrainingsWhereUniqueInput, {
    nullable: true
  })
  cursor?: TrainingsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
