import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersOrderByWithRelationAndSearchRelevanceInput } from "../inputs/CustomersOrderByWithRelationAndSearchRelevanceInput";
import { MessagesOrderByRelevanceInput } from "../inputs/MessagesOrderByRelevanceInput";
import { UsersOrderByWithRelationAndSearchRelevanceInput } from "../inputs/UsersOrderByWithRelationAndSearchRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MessagesOrderByWithRelationAndSearchRelevanceInput", {
  isAbstract: true
})
export class MessagesOrderByWithRelationAndSearchRelevanceInput {
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

  @TypeGraphQL.Field(_type => CustomersOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  customers?: CustomersOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => UsersOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  users?: UsersOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => MessagesOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: MessagesOrderByRelevanceInput | undefined;
}
