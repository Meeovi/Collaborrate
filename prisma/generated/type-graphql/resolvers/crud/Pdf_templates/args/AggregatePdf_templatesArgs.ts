import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Pdf_templatesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Pdf_templatesOrderByWithRelationAndSearchRelevanceInput";
import { Pdf_templatesWhereInput } from "../../../inputs/Pdf_templatesWhereInput";
import { Pdf_templatesWhereUniqueInput } from "../../../inputs/Pdf_templatesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePdf_templatesArgs {
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
}
