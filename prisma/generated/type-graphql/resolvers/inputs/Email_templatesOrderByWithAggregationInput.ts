import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Email_templatesAvgOrderByAggregateInput } from "../inputs/Email_templatesAvgOrderByAggregateInput";
import { Email_templatesCountOrderByAggregateInput } from "../inputs/Email_templatesCountOrderByAggregateInput";
import { Email_templatesMaxOrderByAggregateInput } from "../inputs/Email_templatesMaxOrderByAggregateInput";
import { Email_templatesMinOrderByAggregateInput } from "../inputs/Email_templatesMinOrderByAggregateInput";
import { Email_templatesSumOrderByAggregateInput } from "../inputs/Email_templatesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Email_templatesOrderByWithAggregationInput", {
  isAbstract: true
})
export class Email_templatesOrderByWithAggregationInput {
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
  assigned_to?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  insert_variable?: "asc" | "desc" | undefined;

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
  header?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  footer?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  width?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  height?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  media?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Email_templatesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Email_templatesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Email_templatesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Email_templatesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Email_templatesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Email_templatesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Email_templatesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Email_templatesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Email_templatesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Email_templatesSumOrderByAggregateInput | undefined;
}
