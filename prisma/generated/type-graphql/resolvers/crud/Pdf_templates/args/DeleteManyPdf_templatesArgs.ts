import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Pdf_templatesWhereInput } from "../../../inputs/Pdf_templatesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPdf_templatesArgs {
  @TypeGraphQL.Field(_type => Pdf_templatesWhereInput, {
    nullable: true
  })
  where?: Pdf_templatesWhereInput | undefined;
}
