import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Pdf_templatesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Pdf_templatesOrderByWithRelationAndSearchRelevanceInput";
import { Pdf_templatesWhereInput } from "../../../inputs/Pdf_templatesWhereInput";
import { Pdf_templatesWhereUniqueInput } from "../../../inputs/Pdf_templatesWhereUniqueInput";
import { Pdf_templatesScalarFieldEnum } from "../../../../enums/Pdf_templatesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPdf_templatesArgs {
  @TypeGraphQL.Field(_type => Pdf_templatesWhereInput, {
    nullable: true
  })
  where?: Pdf_templatesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Pdf_templatesOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Pdf_templatesOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Pdf_templatesWhereUniqueInput, {
    nullable: true
  })
  cursor?: Pdf_templatesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Pdf_templatesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "name" | "assigned_to" | "type" | "active" | "page_size" | "orientation" | "content" | "header" | "footer" | "margin_left" | "margin_right" | "margin_top" | "margin_bottom" | "margin_header" | "margin_footer"> | undefined;
}
