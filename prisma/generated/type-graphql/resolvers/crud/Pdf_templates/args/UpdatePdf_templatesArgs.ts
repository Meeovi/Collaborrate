import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Pdf_templatesUpdateInput } from "../../../inputs/Pdf_templatesUpdateInput";
import { Pdf_templatesWhereUniqueInput } from "../../../inputs/Pdf_templatesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdatePdf_templatesArgs {
  @TypeGraphQL.Field(_type => Pdf_templatesUpdateInput, {
    nullable: false
  })
  data!: Pdf_templatesUpdateInput;

  @TypeGraphQL.Field(_type => Pdf_templatesWhereUniqueInput, {
    nullable: false
  })
  where!: Pdf_templatesWhereUniqueInput;
}
