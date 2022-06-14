import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollsAvgOrderByAggregateInput } from "../inputs/PollsAvgOrderByAggregateInput";
import { PollsCountOrderByAggregateInput } from "../inputs/PollsCountOrderByAggregateInput";
import { PollsMaxOrderByAggregateInput } from "../inputs/PollsMaxOrderByAggregateInput";
import { PollsMinOrderByAggregateInput } from "../inputs/PollsMinOrderByAggregateInput";
import { PollsSumOrderByAggregateInput } from "../inputs/PollsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PollsOrderByWithAggregationInput", {
  isAbstract: true
})
export class PollsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  excerpt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  image?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  published?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  question?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  response?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  categories?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  articles?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  products?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  customers?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  users?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PollsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PollsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PollsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PollsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PollsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PollsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PollsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PollsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PollsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PollsSumOrderByAggregateInput | undefined;
}
