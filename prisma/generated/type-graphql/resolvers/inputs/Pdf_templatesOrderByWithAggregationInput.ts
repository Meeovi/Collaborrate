import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Pdf_templatesAvgOrderByAggregateInput } from "../inputs/Pdf_templatesAvgOrderByAggregateInput";
import { Pdf_templatesCountOrderByAggregateInput } from "../inputs/Pdf_templatesCountOrderByAggregateInput";
import { Pdf_templatesMaxOrderByAggregateInput } from "../inputs/Pdf_templatesMaxOrderByAggregateInput";
import { Pdf_templatesMinOrderByAggregateInput } from "../inputs/Pdf_templatesMinOrderByAggregateInput";
import { Pdf_templatesSumOrderByAggregateInput } from "../inputs/Pdf_templatesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Pdf_templatesOrderByWithAggregationInput", {
  isAbstract: true
})
export class Pdf_templatesOrderByWithAggregationInput {
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
  page_size?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  orientation?: "asc" | "desc" | undefined;

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
  margin_left?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  margin_right?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  margin_top?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  margin_bottom?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  margin_header?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  margin_footer?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Pdf_templatesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Pdf_templatesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Pdf_templatesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Pdf_templatesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Pdf_templatesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Pdf_templatesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Pdf_templatesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Pdf_templatesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Pdf_templatesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Pdf_templatesSumOrderByAggregateInput | undefined;
}
