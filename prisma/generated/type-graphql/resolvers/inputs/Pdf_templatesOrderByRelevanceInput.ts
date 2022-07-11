import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Pdf_templatesOrderByRelevanceFieldEnum } from "../../enums/Pdf_templatesOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Pdf_templatesOrderByRelevanceInput", {
  isAbstract: true
})
export class Pdf_templatesOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Pdf_templatesOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "assigned_to" | "type" | "active" | "page_size" | "orientation" | "content" | "header" | "footer" | "margin_left" | "margin_right" | "margin_top" | "margin_bottom" | "margin_header" | "margin_footer">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
