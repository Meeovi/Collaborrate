import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { JobStatusCountOrderByAggregateInput } from "../inputs/JobStatusCountOrderByAggregateInput";
import { JobStatusMaxOrderByAggregateInput } from "../inputs/JobStatusMaxOrderByAggregateInput";
import { JobStatusMinOrderByAggregateInput } from "../inputs/JobStatusMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("JobStatusOrderByWithAggregationInput", {
  isAbstract: true
})
export class JobStatusOrderByWithAggregationInput {
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
  source?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  message?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  params?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  finishedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  rperm?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  wperm?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => JobStatusCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: JobStatusCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => JobStatusMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: JobStatusMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => JobStatusMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: JobStatusMinOrderByAggregateInput | undefined;
}
