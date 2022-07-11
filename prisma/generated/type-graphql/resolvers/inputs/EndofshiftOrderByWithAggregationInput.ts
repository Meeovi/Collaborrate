import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EndofshiftAvgOrderByAggregateInput } from "../inputs/EndofshiftAvgOrderByAggregateInput";
import { EndofshiftCountOrderByAggregateInput } from "../inputs/EndofshiftCountOrderByAggregateInput";
import { EndofshiftMaxOrderByAggregateInput } from "../inputs/EndofshiftMaxOrderByAggregateInput";
import { EndofshiftMinOrderByAggregateInput } from "../inputs/EndofshiftMinOrderByAggregateInput";
import { EndofshiftSumOrderByAggregateInput } from "../inputs/EndofshiftSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EndofshiftOrderByWithAggregationInput", {
  isAbstract: true
})
export class EndofshiftOrderByWithAggregationInput {
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
  content?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  login?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  mcms?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  next_shift?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  projects?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tickets?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  whid?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EndofshiftCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: EndofshiftCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EndofshiftAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: EndofshiftAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EndofshiftMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: EndofshiftMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EndofshiftMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: EndofshiftMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EndofshiftSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: EndofshiftSumOrderByAggregateInput | undefined;
}
