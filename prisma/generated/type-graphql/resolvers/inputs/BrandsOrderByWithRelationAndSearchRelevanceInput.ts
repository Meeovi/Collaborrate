import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BrandsOrderByRelevanceInput } from "../inputs/BrandsOrderByRelevanceInput";
import { MediamanagerOrderByRelationAggregateInput } from "../inputs/MediamanagerOrderByRelationAggregateInput";
import { ProductsOrderByWithRelationAndSearchRelevanceInput } from "../inputs/ProductsOrderByWithRelationAndSearchRelevanceInput";
import { WorkspacesOrderByRelationAggregateInput } from "../inputs/WorkspacesOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BrandsOrderByWithRelationAndSearchRelevanceInput", {
  isAbstract: true
})
export class BrandsOrderByWithRelationAndSearchRelevanceInput {
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
  country?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  state?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isPublic?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  city?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  product?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  media?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProductsOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  products?: ProductsOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => MediamanagerOrderByRelationAggregateInput, {
    nullable: true
  })
  mediamanager?: MediamanagerOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WorkspacesOrderByRelationAggregateInput, {
    nullable: true
  })
  workspaces?: WorkspacesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BrandsOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: BrandsOrderByRelevanceInput | undefined;
}
