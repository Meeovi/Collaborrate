import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SettingsgeneralAvgOrderByAggregateInput } from "../inputs/SettingsgeneralAvgOrderByAggregateInput";
import { SettingsgeneralCountOrderByAggregateInput } from "../inputs/SettingsgeneralCountOrderByAggregateInput";
import { SettingsgeneralMaxOrderByAggregateInput } from "../inputs/SettingsgeneralMaxOrderByAggregateInput";
import { SettingsgeneralMinOrderByAggregateInput } from "../inputs/SettingsgeneralMinOrderByAggregateInput";
import { SettingsgeneralSumOrderByAggregateInput } from "../inputs/SettingsgeneralSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SettingsgeneralOrderByWithAggregationInput", {
  isAbstract: true
})
export class SettingsgeneralOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  site_title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  site_tagline?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  site_website?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  aws_s3?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  google_drive?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SettingsgeneralCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SettingsgeneralCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SettingsgeneralAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SettingsgeneralAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SettingsgeneralMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SettingsgeneralMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SettingsgeneralMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SettingsgeneralMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SettingsgeneralSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SettingsgeneralSumOrderByAggregateInput | undefined;
}
