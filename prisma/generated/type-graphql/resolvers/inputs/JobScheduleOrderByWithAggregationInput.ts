import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { JobScheduleAvgOrderByAggregateInput } from "../inputs/JobScheduleAvgOrderByAggregateInput";
import { JobScheduleCountOrderByAggregateInput } from "../inputs/JobScheduleCountOrderByAggregateInput";
import { JobScheduleMaxOrderByAggregateInput } from "../inputs/JobScheduleMaxOrderByAggregateInput";
import { JobScheduleMinOrderByAggregateInput } from "../inputs/JobScheduleMinOrderByAggregateInput";
import { JobScheduleSumOrderByAggregateInput } from "../inputs/JobScheduleSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("JobScheduleOrderByWithAggregationInput", {
  isAbstract: true
})
export class JobScheduleOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  objectId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  jobName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  params?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  startAfter?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  daysOfWeek?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  timeOfDay?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  lastRun?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  repeatMinutes?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  rperm?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  wperm?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => JobScheduleCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: JobScheduleCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => JobScheduleAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: JobScheduleAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => JobScheduleMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: JobScheduleMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => JobScheduleMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: JobScheduleMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => JobScheduleSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: JobScheduleSumOrderByAggregateInput | undefined;
}
