import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CollectionsOrderByWithAggregationInput } from "../../../inputs/CollectionsOrderByWithAggregationInput";
import { CollectionsScalarWhereWithAggregatesInput } from "../../../inputs/CollectionsScalarWhereWithAggregatesInput";
import { CollectionsWhereInput } from "../../../inputs/CollectionsWhereInput";
import { CollectionsScalarFieldEnum } from "../../../../enums/CollectionsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCollectionsArgs {
  @TypeGraphQL.Field(_type => CollectionsWhereInput, {
    nullable: true
  })
  where?: CollectionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CollectionsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CollectionsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "name" | "description" | "image" | "product" | "meta_title" | "meta_keywords" | "meta_description">;

  @TypeGraphQL.Field(_type => CollectionsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CollectionsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
