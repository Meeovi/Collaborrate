import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PushStatusAvgOrderByAggregateInput } from "../inputs/PushStatusAvgOrderByAggregateInput";
import { PushStatusCountOrderByAggregateInput } from "../inputs/PushStatusCountOrderByAggregateInput";
import { PushStatusMaxOrderByAggregateInput } from "../inputs/PushStatusMaxOrderByAggregateInput";
import { PushStatusMinOrderByAggregateInput } from "../inputs/PushStatusMinOrderByAggregateInput";
import { PushStatusSumOrderByAggregateInput } from "../inputs/PushStatusSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PushStatusOrderByWithAggregationInput", {
  isAbstract: true
})
export class PushStatusOrderByWithAggregationInput {
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
  pushTime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  source?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  query?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  payload?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  expiry?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  expiration_interval?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  numSent?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  numFailed?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  pushHash?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  errorMessage?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sentPerType?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  failedPerType?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sentPerUTCOffset?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  failedPerUTCOffset?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  count?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  rperm?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  wperm?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PushStatusCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PushStatusCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PushStatusAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PushStatusAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PushStatusMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PushStatusMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PushStatusMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PushStatusMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PushStatusSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PushStatusSumOrderByAggregateInput | undefined;
}
