import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Pdf_templatesCreateInput } from "../../../inputs/Pdf_templatesCreateInput";
import { Pdf_templatesUpdateInput } from "../../../inputs/Pdf_templatesUpdateInput";
import { Pdf_templatesWhereUniqueInput } from "../../../inputs/Pdf_templatesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertPdf_templatesArgs {
  @TypeGraphQL.Field(_type => Pdf_templatesWhereUniqueInput, {
    nullable: false
  })
  where!: Pdf_templatesWhereUniqueInput;

  @TypeGraphQL.Field(_type => Pdf_templatesCreateInput, {
    nullable: false
  })
  create!: Pdf_templatesCreateInput;

  @TypeGraphQL.Field(_type => Pdf_templatesUpdateInput, {
    nullable: false
  })
  update!: Pdf_templatesUpdateInput;
}
