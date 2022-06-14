import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Pdf_templatesCreateInput } from "../../../inputs/Pdf_templatesCreateInput";

@TypeGraphQL.ArgsType()
export class CreatePdf_templatesArgs {
  @TypeGraphQL.Field(_type => Pdf_templatesCreateInput, {
    nullable: false
  })
  data!: Pdf_templatesCreateInput;
}
