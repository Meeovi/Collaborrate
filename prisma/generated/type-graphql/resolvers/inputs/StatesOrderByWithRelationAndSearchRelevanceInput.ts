import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatesOrderByRelevanceInput } from "../inputs/StatesOrderByRelevanceInput";
import { TrainingsOrderByRelationAggregateInput } from "../inputs/TrainingsOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("StatesOrderByWithRelationAndSearchRelevanceInput", {
  isAbstract: true
})
export class StatesOrderByWithRelationAndSearchRelevanceInput {
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

  @TypeGraphQL.Field(_type => TrainingsOrderByRelationAggregateInput, {
    nullable: true
  })
  trainings?: TrainingsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StatesOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: StatesOrderByRelevanceInput | undefined;
}
