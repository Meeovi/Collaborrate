import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatesAvgOrderByAggregateInput } from "../inputs/StatesAvgOrderByAggregateInput";
import { StatesCountOrderByAggregateInput } from "../inputs/StatesCountOrderByAggregateInput";
import { StatesMaxOrderByAggregateInput } from "../inputs/StatesMaxOrderByAggregateInput";
import { StatesMinOrderByAggregateInput } from "../inputs/StatesMinOrderByAggregateInput";
import { StatesSumOrderByAggregateInput } from "../inputs/StatesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("StatesOrderByWithAggregationInput", {
  isAbstract: true
})
export class StatesOrderByWithAggregationInput {
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
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  country?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  image?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => StatesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: StatesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StatesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: StatesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StatesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: StatesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StatesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: StatesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StatesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: StatesSumOrderByAggregateInput | undefined;
}
