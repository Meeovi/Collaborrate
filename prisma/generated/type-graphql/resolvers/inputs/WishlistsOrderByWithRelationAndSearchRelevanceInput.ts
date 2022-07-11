import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OccassionsOrderByRelationAggregateInput } from "../inputs/OccassionsOrderByRelationAggregateInput";
import { WishlistsOrderByRelevanceInput } from "../inputs/WishlistsOrderByRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("WishlistsOrderByWithRelationAndSearchRelevanceInput", {
  isAbstract: true
})
export class WishlistsOrderByWithRelationAndSearchRelevanceInput {
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
  customers?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  visibility?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  products?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  quantity?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => OccassionsOrderByRelationAggregateInput, {
    nullable: true
  })
  occassions?: OccassionsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WishlistsOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: WishlistsOrderByRelevanceInput | undefined;
}
