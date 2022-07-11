import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CollectionsAvgOrderByAggregateInput } from "../inputs/CollectionsAvgOrderByAggregateInput";
import { CollectionsCountOrderByAggregateInput } from "../inputs/CollectionsCountOrderByAggregateInput";
import { CollectionsMaxOrderByAggregateInput } from "../inputs/CollectionsMaxOrderByAggregateInput";
import { CollectionsMinOrderByAggregateInput } from "../inputs/CollectionsMinOrderByAggregateInput";
import { CollectionsSumOrderByAggregateInput } from "../inputs/CollectionsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CollectionsOrderByWithAggregationInput", {
  isAbstract: true
})
export class CollectionsOrderByWithAggregationInput {
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
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  image?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  product?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  meta_title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  meta_keywords?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  meta_description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CollectionsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CollectionsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CollectionsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CollectionsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CollectionsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CollectionsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CollectionsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CollectionsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CollectionsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CollectionsSumOrderByAggregateInput | undefined;
}
