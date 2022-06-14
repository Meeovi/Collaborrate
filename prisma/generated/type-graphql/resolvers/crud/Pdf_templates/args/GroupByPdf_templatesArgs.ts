import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Pdf_templatesOrderByWithAggregationInput } from "../../../inputs/Pdf_templatesOrderByWithAggregationInput";
import { Pdf_templatesScalarWhereWithAggregatesInput } from "../../../inputs/Pdf_templatesScalarWhereWithAggregatesInput";
import { Pdf_templatesWhereInput } from "../../../inputs/Pdf_templatesWhereInput";
import { Pdf_templatesScalarFieldEnum } from "../../../../enums/Pdf_templatesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPdf_templatesArgs {
  @TypeGraphQL.Field(_type => Pdf_templatesWhereInput, {
    nullable: true
  })
  where?: Pdf_templatesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Pdf_templatesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Pdf_templatesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Pdf_templatesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "name" | "assigned_to" | "type" | "active" | "page_size" | "orientation" | "content" | "header" | "footer" | "margin_left" | "margin_right" | "margin_top" | "margin_bottom" | "margin_header" | "margin_footer">;

  @TypeGraphQL.Field(_type => Pdf_templatesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Pdf_templatesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
