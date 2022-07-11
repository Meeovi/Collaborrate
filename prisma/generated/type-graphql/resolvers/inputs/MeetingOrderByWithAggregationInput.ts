import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MeetingAvgOrderByAggregateInput } from "../inputs/MeetingAvgOrderByAggregateInput";
import { MeetingCountOrderByAggregateInput } from "../inputs/MeetingCountOrderByAggregateInput";
import { MeetingMaxOrderByAggregateInput } from "../inputs/MeetingMaxOrderByAggregateInput";
import { MeetingMinOrderByAggregateInput } from "../inputs/MeetingMinOrderByAggregateInput";
import { MeetingSumOrderByAggregateInput } from "../inputs/MeetingSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MeetingOrderByWithAggregationInput", {
  isAbstract: true
})
export class MeetingOrderByWithAggregationInput {
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
  subject?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  start_date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  end_date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  duration?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  related_to?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  reminders?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  content?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  assigned_to?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  invitees?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  scheduling?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MeetingCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MeetingCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MeetingAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MeetingAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MeetingMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MeetingMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MeetingMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MeetingMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MeetingSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MeetingSumOrderByAggregateInput | undefined;
}
