import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { KnowledgebaseAvgOrderByAggregateInput } from "../inputs/KnowledgebaseAvgOrderByAggregateInput";
import { KnowledgebaseCountOrderByAggregateInput } from "../inputs/KnowledgebaseCountOrderByAggregateInput";
import { KnowledgebaseMaxOrderByAggregateInput } from "../inputs/KnowledgebaseMaxOrderByAggregateInput";
import { KnowledgebaseMinOrderByAggregateInput } from "../inputs/KnowledgebaseMinOrderByAggregateInput";
import { KnowledgebaseSumOrderByAggregateInput } from "../inputs/KnowledgebaseSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("KnowledgebaseOrderByWithAggregationInput", {
  isAbstract: true
})
export class KnowledgebaseOrderByWithAggregationInput {
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
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  revision?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  content?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  resolution?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  author?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  approver?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  date_modified?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => KnowledgebaseCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: KnowledgebaseCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => KnowledgebaseAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: KnowledgebaseAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => KnowledgebaseMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: KnowledgebaseMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => KnowledgebaseMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: KnowledgebaseMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => KnowledgebaseSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: KnowledgebaseSumOrderByAggregateInput | undefined;
}
