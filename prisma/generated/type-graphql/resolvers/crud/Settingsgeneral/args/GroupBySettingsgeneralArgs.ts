import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingsgeneralOrderByWithAggregationInput } from "../../../inputs/SettingsgeneralOrderByWithAggregationInput";
import { SettingsgeneralScalarWhereWithAggregatesInput } from "../../../inputs/SettingsgeneralScalarWhereWithAggregatesInput";
import { SettingsgeneralWhereInput } from "../../../inputs/SettingsgeneralWhereInput";
import { SettingsgeneralScalarFieldEnum } from "../../../../enums/SettingsgeneralScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySettingsgeneralArgs {
  @TypeGraphQL.Field(_type => SettingsgeneralWhereInput, {
    nullable: true
  })
  where?: SettingsgeneralWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SettingsgeneralOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SettingsgeneralOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SettingsgeneralScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "site_title" | "site_tagline" | "site_website" | "email" | "aws_s3" | "google_drive">;

  @TypeGraphQL.Field(_type => SettingsgeneralScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SettingsgeneralScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
