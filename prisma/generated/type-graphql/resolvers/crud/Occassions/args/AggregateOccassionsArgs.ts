import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OccassionsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/OccassionsOrderByWithRelationAndSearchRelevanceInput";
import { OccassionsWhereInput } from "../../../inputs/OccassionsWhereInput";
import { OccassionsWhereUniqueInput } from "../../../inputs/OccassionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateOccassionsArgs {
  @TypeGraphQL.Field(_type => OccassionsWhereInput, {
    nullable: true
  })
  where?: OccassionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OccassionsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: OccassionsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => OccassionsWhereUniqueInput, {
    nullable: true
  })
  cursor?: OccassionsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
