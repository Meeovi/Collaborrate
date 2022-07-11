import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessagesAvgOrderByAggregateInput } from "../inputs/MessagesAvgOrderByAggregateInput";
import { MessagesCountOrderByAggregateInput } from "../inputs/MessagesCountOrderByAggregateInput";
import { MessagesMaxOrderByAggregateInput } from "../inputs/MessagesMaxOrderByAggregateInput";
import { MessagesMinOrderByAggregateInput } from "../inputs/MessagesMinOrderByAggregateInput";
import { MessagesSumOrderByAggregateInput } from "../inputs/MessagesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MessagesOrderByWithAggregationInput", {
  isAbstract: true
})
export class MessagesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  from?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  subject?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  content?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sender?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cust_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  media?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  staff_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MessagesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MessagesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MessagesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MessagesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MessagesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MessagesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MessagesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MessagesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MessagesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MessagesSumOrderByAggregateInput | undefined;
}
