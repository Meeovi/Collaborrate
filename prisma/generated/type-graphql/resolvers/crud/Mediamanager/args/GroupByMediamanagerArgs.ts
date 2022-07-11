import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MediamanagerOrderByWithAggregationInput } from "../../../inputs/MediamanagerOrderByWithAggregationInput";
import { MediamanagerScalarWhereWithAggregatesInput } from "../../../inputs/MediamanagerScalarWhereWithAggregatesInput";
import { MediamanagerWhereInput } from "../../../inputs/MediamanagerWhereInput";
import { MediamanagerScalarFieldEnum } from "../../../../enums/MediamanagerScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMediamanagerArgs {
  @TypeGraphQL.Field(_type => MediamanagerWhereInput, {
    nullable: true
  })
  where?: MediamanagerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MediamanagerOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "name" | "description" | "media" | "keywords" | "tags" | "brands" | "status" | "expiration_date" | "copyright" | "dimensions" | "author" | "content_type" | "versions" | "watermark_name" | "watermark_description" | "watermark_media" | "agreements" | "albums" | "comment" | "workspace" | "task_name" | "task_description" | "task_type" | "members" | "products">;

  @TypeGraphQL.Field(_type => MediamanagerScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MediamanagerScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
