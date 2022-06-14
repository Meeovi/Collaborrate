import * as TypeGraphQL from "type-graphql";

export enum MediamanagerScalarFieldEnum {
  id = "id",
  created_at = "created_at",
  name = "name",
  description = "description",
  media = "media",
  keywords = "keywords",
  tags = "tags",
  brands = "brands",
  status = "status",
  expiration_date = "expiration_date",
  copyright = "copyright",
  dimensions = "dimensions",
  author = "author",
  content_type = "content_type",
  versions = "versions",
  watermark_name = "watermark_name",
  watermark_description = "watermark_description",
  watermark_media = "watermark_media",
  agreements = "agreements",
  albums = "albums",
  comment = "comment",
  workspace = "workspace",
  task_name = "task_name",
  task_description = "task_description",
  task_type = "task_type",
  members = "members",
  products = "products"
}
TypeGraphQL.registerEnumType(MediamanagerScalarFieldEnum, {
  name: "MediamanagerScalarFieldEnum",
  description: undefined,
});
