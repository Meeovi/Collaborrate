import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Pdf_templatesOrderByWithRelationInput } from "../../../inputs/Pdf_templatesOrderByWithRelationInput";
import { Pdf_templatesWhereInput } from "../../../inputs/Pdf_templatesWhereInput";
import { Pdf_templatesWhereUniqueInput } from "../../../inputs/Pdf_templatesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePdf_templatesArgs {
  @TypeGraphQL.Field(_type => Pdf_templatesWhereInput, {
    nullable: true
  })
  where?: Pdf_templatesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Pdf_templatesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Pdf_templatesOrderByWithRelationInput[] | undefined;

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
}
