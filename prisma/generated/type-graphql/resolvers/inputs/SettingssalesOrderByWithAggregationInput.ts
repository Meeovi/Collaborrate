import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SettingssalesAvgOrderByAggregateInput } from "../inputs/SettingssalesAvgOrderByAggregateInput";
import { SettingssalesCountOrderByAggregateInput } from "../inputs/SettingssalesCountOrderByAggregateInput";
import { SettingssalesMaxOrderByAggregateInput } from "../inputs/SettingssalesMaxOrderByAggregateInput";
import { SettingssalesMinOrderByAggregateInput } from "../inputs/SettingssalesMinOrderByAggregateInput";
import { SettingssalesSumOrderByAggregateInput } from "../inputs/SettingssalesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SettingssalesOrderByWithAggregationInput", {
  isAbstract: true
})
export class SettingssalesOrderByWithAggregationInput {
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
  analytics_account_type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  analytics_account_number?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  analytics_anonymizeip?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  analytics_content_experiments?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  adwords_conversionid?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  adwords_conversionlanguage?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  adwords_conversionformat?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  adwords_conversioncolor?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  adwords_conversionlabel?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  adwords_conversionvalue_type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  adwords_sendorder?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tag_manager_anonymizeip?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tag_manager_contentexperiments?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tag_manager_containerid?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SettingssalesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SettingssalesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SettingssalesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SettingssalesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SettingssalesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SettingssalesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SettingssalesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SettingssalesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SettingssalesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SettingssalesSumOrderByAggregateInput | undefined;
}
