import * as TypeGraphQL from "type-graphql";

export enum SettingsgeneralScalarFieldEnum {
  id = "id",
  created_at = "created_at",
  site_title = "site_title",
  site_tagline = "site_tagline",
  site_website = "site_website",
  email = "email",
  aws_s3 = "aws_s3",
  google_drive = "google_drive"
}
TypeGraphQL.registerEnumType(SettingsgeneralScalarFieldEnum, {
  name: "SettingsgeneralScalarFieldEnum",
  description: undefined,
});
