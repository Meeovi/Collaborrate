import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IdempotencyCountOrderByAggregateInput } from "../inputs/IdempotencyCountOrderByAggregateInput";
import { IdempotencyMaxOrderByAggregateInput } from "../inputs/IdempotencyMaxOrderByAggregateInput";
import { IdempotencyMinOrderByAggregateInput } from "../inputs/IdempotencyMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("IdempotencyOrderByWithAggregationInput", {
  isAbstract: true
})
export class IdempotencyOrderByWithAggregationInput {
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
  reqId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  expire?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  rperm?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  wperm?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => IdempotencyCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: IdempotencyCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IdempotencyMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: IdempotencyMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IdempotencyMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: IdempotencyMinOrderByAggregateInput | undefined;
}
