import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsOrderByRelevanceInput } from "../inputs/CommentsOrderByRelevanceInput";
import { CustomersOrderByWithRelationAndSearchRelevanceInput } from "../inputs/CustomersOrderByWithRelationAndSearchRelevanceInput";
import { MediamanagerOrderByRelationAggregateInput } from "../inputs/MediamanagerOrderByRelationAggregateInput";
import { TrainingsOrderByRelationAggregateInput } from "../inputs/TrainingsOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CommentsOrderByWithRelationAndSearchRelevanceInput", {
  isAbstract: true
})
export class CommentsOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  customer_name?: "asc" | "desc" | undefined;

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
  response?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  published?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cust_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CustomersOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  customers?: CustomersOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => MediamanagerOrderByRelationAggregateInput, {
    nullable: true
  })
  mediamanager?: MediamanagerOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TrainingsOrderByRelationAggregateInput, {
    nullable: true
  })
  trainings?: TrainingsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CommentsOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: CommentsOrderByRelevanceInput | undefined;
}
