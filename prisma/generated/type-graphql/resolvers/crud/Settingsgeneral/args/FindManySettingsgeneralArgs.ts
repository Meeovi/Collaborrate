import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingsgeneralOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/SettingsgeneralOrderByWithRelationAndSearchRelevanceInput";
import { SettingsgeneralWhereInput } from "../../../inputs/SettingsgeneralWhereInput";
import { SettingsgeneralWhereUniqueInput } from "../../../inputs/SettingsgeneralWhereUniqueInput";
import { SettingsgeneralScalarFieldEnum } from "../../../../enums/SettingsgeneralScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManySettingsgeneralArgs {
  @TypeGraphQL.Field(_type => SettingsgeneralWhereInput, {
    nullable: true
  })
  where?: SettingsgeneralWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SettingsgeneralOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: SettingsgeneralOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => SettingsgeneralWhereUniqueInput, {
    nullable: true
  })
  cursor?: SettingsgeneralWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SettingsgeneralScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "site_title" | "site_tagline" | "site_website" | "email" | "aws_s3" | "google_drive"> | undefined;
}
