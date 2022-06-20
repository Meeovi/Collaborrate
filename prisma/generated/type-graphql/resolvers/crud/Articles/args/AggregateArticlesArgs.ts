import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArticlesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ArticlesOrderByWithRelationAndSearchRelevanceInput";
import { ArticlesWhereInput } from "../../../inputs/ArticlesWhereInput";
import { ArticlesWhereUniqueInput } from "../../../inputs/ArticlesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateArticlesArgs {
  @TypeGraphQL.Field(_type => ArticlesWhereInput, {
    nullable: true
  })
  where?: ArticlesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ArticlesOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: ArticlesOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => ArticlesWhereUniqueInput, {
    nullable: true
  })
  cursor?: ArticlesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
