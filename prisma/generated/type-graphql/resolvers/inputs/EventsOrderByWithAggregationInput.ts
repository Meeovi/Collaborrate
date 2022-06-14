import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventsAvgOrderByAggregateInput } from "../inputs/EventsAvgOrderByAggregateInput";
import { EventsCountOrderByAggregateInput } from "../inputs/EventsCountOrderByAggregateInput";
import { EventsMaxOrderByAggregateInput } from "../inputs/EventsMaxOrderByAggregateInput";
import { EventsMinOrderByAggregateInput } from "../inputs/EventsMinOrderByAggregateInput";
import { EventsSumOrderByAggregateInput } from "../inputs/EventsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EventsOrderByWithAggregationInput", {
  isAbstract: true
})
export class EventsOrderByWithAggregationInput {
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
  content?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tickets?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  image?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  start?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  end?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  category?: "asc" | "desc" | undefined;

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
  postalcode?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EventsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: EventsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EventsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: EventsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EventsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: EventsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EventsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: EventsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EventsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: EventsSumOrderByAggregateInput | undefined;
}
