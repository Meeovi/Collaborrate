import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomizationsAvgOrderByAggregateInput } from "../inputs/CustomizationsAvgOrderByAggregateInput";
import { CustomizationsCountOrderByAggregateInput } from "../inputs/CustomizationsCountOrderByAggregateInput";
import { CustomizationsMaxOrderByAggregateInput } from "../inputs/CustomizationsMaxOrderByAggregateInput";
import { CustomizationsMinOrderByAggregateInput } from "../inputs/CustomizationsMinOrderByAggregateInput";
import { CustomizationsSumOrderByAggregateInput } from "../inputs/CustomizationsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CustomizationsOrderByWithAggregationInput", {
  isAbstract: true
})
export class CustomizationsOrderByWithAggregationInput {
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
  site_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  nav_link?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  notification?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  banner?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  footer_link?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  announcement?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  site_url?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  allow_signup?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CustomizationsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CustomizationsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CustomizationsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CustomizationsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CustomizationsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CustomizationsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CustomizationsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CustomizationsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CustomizationsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CustomizationsSumOrderByAggregateInput | undefined;
}
