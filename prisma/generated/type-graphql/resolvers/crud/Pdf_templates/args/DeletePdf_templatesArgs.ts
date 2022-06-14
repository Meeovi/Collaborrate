import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Pdf_templatesWhereUniqueInput } from "../../../inputs/Pdf_templatesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeletePdf_templatesArgs {
  @TypeGraphQL.Field(_type => Pdf_templatesWhereUniqueInput, {
    nullable: false
  })
  where!: Pdf_templatesWhereUniqueInput;
}
