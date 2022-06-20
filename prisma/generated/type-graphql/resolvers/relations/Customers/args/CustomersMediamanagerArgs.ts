import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MediamanagerOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/MediamanagerOrderByWithRelationAndSearchRelevanceInput";
import { MediamanagerWhereInput } from "../../../inputs/MediamanagerWhereInput";
import { MediamanagerWhereUniqueInput } from "../../../inputs/MediamanagerWhereUniqueInput";
import { MediamanagerScalarFieldEnum } from "../../../../enums/MediamanagerScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class CustomersMediamanagerArgs {
  @TypeGraphQL.Field(_type => MediamanagerWhereInput, {
    nullable: true
  })
  where?: MediamanagerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: MediamanagerOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => MediamanagerWhereUniqueInput, {
    nullable: true
  })
  cursor?: MediamanagerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "name" | "description" | "media" | "keywords" | "tags" | "brands" | "status" | "expiration_date" | "copyright" | "dimensions" | "author" | "content_type" | "versions" | "watermark_name" | "watermark_description" | "watermark_media" | "agreements" | "albums" | "comment" | "workspace" | "task_name" | "task_description" | "task_type" | "members" | "products"> | undefined;
}
