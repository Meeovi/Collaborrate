import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChannelsAvgOrderByAggregateInput } from "../inputs/ChannelsAvgOrderByAggregateInput";
import { ChannelsCountOrderByAggregateInput } from "../inputs/ChannelsCountOrderByAggregateInput";
import { ChannelsMaxOrderByAggregateInput } from "../inputs/ChannelsMaxOrderByAggregateInput";
import { ChannelsMinOrderByAggregateInput } from "../inputs/ChannelsMinOrderByAggregateInput";
import { ChannelsSumOrderByAggregateInput } from "../inputs/ChannelsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ChannelsOrderByWithAggregationInput", {
  isAbstract: true
})
export class ChannelsOrderByWithAggregationInput {
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
  code?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  currency?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  default_lang?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  include_tax?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  default_zone?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  default_shipping?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  client_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  client_secret?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ChannelsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ChannelsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ChannelsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ChannelsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ChannelsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ChannelsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ChannelsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ChannelsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ChannelsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ChannelsSumOrderByAggregateInput | undefined;
}
