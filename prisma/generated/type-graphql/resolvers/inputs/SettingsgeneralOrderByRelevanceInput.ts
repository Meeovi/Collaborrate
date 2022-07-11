import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SettingsgeneralOrderByRelevanceFieldEnum } from "../../enums/SettingsgeneralOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SettingsgeneralOrderByRelevanceInput", {
  isAbstract: true
})
export class SettingsgeneralOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [SettingsgeneralOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"site_title" | "site_tagline" | "site_website" | "email" | "aws_s3" | "google_drive">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
