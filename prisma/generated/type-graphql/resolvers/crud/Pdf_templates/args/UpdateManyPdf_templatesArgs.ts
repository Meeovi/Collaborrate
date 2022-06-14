import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Pdf_templatesUpdateManyMutationInput } from "../../../inputs/Pdf_templatesUpdateManyMutationInput";
import { Pdf_templatesWhereInput } from "../../../inputs/Pdf_templatesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPdf_templatesArgs {
  @TypeGraphQL.Field(_type => Pdf_templatesUpdateManyMutationInput, {
    nullable: false
  })
  data!: Pdf_templatesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Pdf_templatesWhereInput, {
    nullable: true
  })
  where?: Pdf_templatesWhereInput | undefined;
}
