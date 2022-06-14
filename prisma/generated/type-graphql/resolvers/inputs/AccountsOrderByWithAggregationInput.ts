import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountsAvgOrderByAggregateInput } from "../inputs/AccountsAvgOrderByAggregateInput";
import { AccountsCountOrderByAggregateInput } from "../inputs/AccountsCountOrderByAggregateInput";
import { AccountsMaxOrderByAggregateInput } from "../inputs/AccountsMaxOrderByAggregateInput";
import { AccountsMinOrderByAggregateInput } from "../inputs/AccountsMinOrderByAggregateInput";
import { AccountsSumOrderByAggregateInput } from "../inputs/AccountsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AccountsOrderByWithAggregationInput", {
  isAbstract: true
})
export class AccountsOrderByWithAggregationInput {
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
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  website?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  office_phone?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  fax?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  address?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  postalcode?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  city?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  state?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  country?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  assigned_to?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  alt_address?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  alt_postalcode?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  alt_city?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  alt_state?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  alt_country?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  industry?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  employees?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  annual_revenue?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  member_of?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  campaign?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AccountsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: AccountsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AccountsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: AccountsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AccountsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: AccountsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AccountsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: AccountsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AccountsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: AccountsSumOrderByAggregateInput | undefined;
}
