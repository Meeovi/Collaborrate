import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CollectionsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/CollectionsOrderByWithRelationAndSearchRelevanceInput";
import { CollectionsWhereInput } from "../../../inputs/CollectionsWhereInput";
import { CollectionsWhereUniqueInput } from "../../../inputs/CollectionsWhereUniqueInput";
import { CollectionsScalarFieldEnum } from "../../../../enums/CollectionsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyCollectionsArgs {
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

  @TypeGraphQL.Field(_type => [CollectionsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "name" | "description" | "image" | "product" | "meta_title" | "meta_keywords" | "meta_description"> | undefined;
}
