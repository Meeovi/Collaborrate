import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Content_typeAvgOrderByAggregateInput } from "../inputs/Content_typeAvgOrderByAggregateInput";
import { Content_typeCountOrderByAggregateInput } from "../inputs/Content_typeCountOrderByAggregateInput";
import { Content_typeMaxOrderByAggregateInput } from "../inputs/Content_typeMaxOrderByAggregateInput";
import { Content_typeMinOrderByAggregateInput } from "../inputs/Content_typeMinOrderByAggregateInput";
import { Content_typeSumOrderByAggregateInput } from "../inputs/Content_typeSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Content_typeOrderByWithAggregationInput", {
  isAbstract: true
})
export class Content_typeOrderByWithAggregationInput {
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
  text?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  number?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  json?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  link?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  uid?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  time?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  timestamp?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  boolean?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  rich_text?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  password?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  media?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  database_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Content_typeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Content_typeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Content_typeAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Content_typeAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Content_typeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Content_typeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Content_typeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Content_typeMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Content_typeSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Content_typeSumOrderByAggregateInput | undefined;
}
