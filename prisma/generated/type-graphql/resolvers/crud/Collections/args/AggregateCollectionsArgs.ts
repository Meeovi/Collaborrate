import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CollectionsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/CollectionsOrderByWithRelationAndSearchRelevanceInput";
import { CollectionsWhereInput } from "../../../inputs/CollectionsWhereInput";
import { CollectionsWhereUniqueInput } from "../../../inputs/CollectionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCollectionsArgs {
  @TypeGraphQL.Field(_type => CollectionsWhereInput, {
    nullable: true
  })
  where?: CollectionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CollectionsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: CollectionsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => CollectionsWhereUniqueInput, {
    nullable: true
  })
  cursor?: CollectionsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
