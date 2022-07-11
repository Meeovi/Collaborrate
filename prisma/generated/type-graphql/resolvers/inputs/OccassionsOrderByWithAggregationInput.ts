import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OccassionsAvgOrderByAggregateInput } from "../inputs/OccassionsAvgOrderByAggregateInput";
import { OccassionsCountOrderByAggregateInput } from "../inputs/OccassionsCountOrderByAggregateInput";
import { OccassionsMaxOrderByAggregateInput } from "../inputs/OccassionsMaxOrderByAggregateInput";
import { OccassionsMinOrderByAggregateInput } from "../inputs/OccassionsMinOrderByAggregateInput";
import { OccassionsSumOrderByAggregateInput } from "../inputs/OccassionsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("OccassionsOrderByWithAggregationInput", {
  isAbstract: true
})
export class OccassionsOrderByWithAggregationInput {
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
  category?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tags?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  products?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  wishlists?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => OccassionsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: OccassionsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OccassionsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: OccassionsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OccassionsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: OccassionsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OccassionsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: OccassionsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OccassionsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: OccassionsSumOrderByAggregateInput | undefined;
}
