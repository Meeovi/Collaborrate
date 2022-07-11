import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Pdf_templatesCreateManyInput } from "../../../inputs/Pdf_templatesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPdf_templatesArgs {
  @TypeGraphQL.Field(_type => [Pdf_templatesCreateManyInput], {
    nullable: false
  })
  data!: Pdf_templatesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
