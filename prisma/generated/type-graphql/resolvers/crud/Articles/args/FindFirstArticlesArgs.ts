import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArticlesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ArticlesOrderByWithRelationAndSearchRelevanceInput";
import { ArticlesWhereInput } from "../../../inputs/ArticlesWhereInput";
import { ArticlesWhereUniqueInput } from "../../../inputs/ArticlesWhereUniqueInput";
import { ArticlesScalarFieldEnum } from "../../../../enums/ArticlesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstArticlesArgs {
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

  @TypeGraphQL.Field(_type => [ArticlesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "excerpt" | "content" | "image" | "categories" | "customers" | "users" | "published" | "cust_id" | "isPublic" | "meta_description" | "meta_name" | "meta_url" | "tags"> | undefined;
}
