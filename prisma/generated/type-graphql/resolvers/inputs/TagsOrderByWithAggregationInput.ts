import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsAvgOrderByAggregateInput } from "../inputs/TagsAvgOrderByAggregateInput";
import { TagsCountOrderByAggregateInput } from "../inputs/TagsCountOrderByAggregateInput";
import { TagsMaxOrderByAggregateInput } from "../inputs/TagsMaxOrderByAggregateInput";
import { TagsMinOrderByAggregateInput } from "../inputs/TagsMinOrderByAggregateInput";
import { TagsSumOrderByAggregateInput } from "../inputs/TagsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TagsOrderByWithAggregationInput", {
  isAbstract: true
})
export class TagsOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => TagsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TagsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TagsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: TagsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TagsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TagsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TagsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TagsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TagsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: TagsSumOrderByAggregateInput | undefined;
}
