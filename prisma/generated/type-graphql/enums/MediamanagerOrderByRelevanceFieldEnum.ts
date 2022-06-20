import * as TypeGraphQL from "type-graphql";

export enum MediamanagerOrderByRelevanceFieldEnum {
  name = "name",
  description = "description",
  media = "media",
  keywords = "keywords",
  tags = "tags",
  status = "status",
  expiration_date = "expiration_date",
  copyright = "copyright",
  dimensions = "dimensions",
  content_type = "content_type",
  versions = "versions",
  watermark_name = "watermark_name",
  watermark_description = "watermark_description",
  watermark_media = "watermark_media",
  albums = "albums",
  workspace = "workspace",
  task_description = "task_description",
  task_type = "task_type"
}
TypeGraphQL.registerEnumType(MediamanagerOrderByRelevanceFieldEnum, {
  name: "MediamanagerOrderByRelevanceFieldEnum",
  description: undefined,
});
