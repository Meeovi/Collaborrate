import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArticlesOrderByWithAggregationInput } from "../../../inputs/ArticlesOrderByWithAggregationInput";
import { ArticlesScalarWhereWithAggregatesInput } from "../../../inputs/ArticlesScalarWhereWithAggregatesInput";
import { ArticlesWhereInput } from "../../../inputs/ArticlesWhereInput";
import { ArticlesScalarFieldEnum } from "../../../../enums/ArticlesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByArticlesArgs {
  @TypeGraphQL.Field(_type => ArticlesWhereInput, {
    nullable: true
  })
  where?: ArticlesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ArticlesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ArticlesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArticlesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "excerpt" | "content" | "image" | "categories" | "customers" | "users" | "published" | "cust_id" | "isPublic" | "meta_description" | "meta_name" | "meta_url" | "tags">;

  @TypeGraphQL.Field(_type => ArticlesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ArticlesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
