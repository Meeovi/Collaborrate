import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/TagsOrderByWithRelationAndSearchRelevanceInput";
import { TagsWhereInput } from "../../../inputs/TagsWhereInput";
import { TagsWhereUniqueInput } from "../../../inputs/TagsWhereUniqueInput";
import { TagsScalarFieldEnum } from "../../../../enums/TagsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstTagsArgs {
  @TypeGraphQL.Field(_type => TagsWhereInput, {
    nullable: true
  })
  where?: TagsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TagsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: TagsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => TagsWhereUniqueInput, {
    nullable: true
  })
  cursor?: TagsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TagsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "excerpt" | "categories" | "articles" | "products" | "customers" | "users"> | undefined;
}
