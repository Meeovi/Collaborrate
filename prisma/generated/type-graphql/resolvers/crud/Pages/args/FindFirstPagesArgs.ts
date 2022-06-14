import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PagesOrderByWithRelationInput } from "../../../inputs/PagesOrderByWithRelationInput";
import { PagesWhereInput } from "../../../inputs/PagesWhereInput";
import { PagesWhereUniqueInput } from "../../../inputs/PagesWhereUniqueInput";
import { PagesScalarFieldEnum } from "../../../../enums/PagesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPagesArgs {
  @TypeGraphQL.Field(_type => PagesWhereInput, {
    nullable: true
  })
  where?: PagesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PagesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PagesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PagesWhereUniqueInput, {
    nullable: true
  })
  cursor?: PagesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PagesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "enable_page" | "title" | "content_title" | "content" | "url_key" | "meta_title" | "meta_keywords" | "meta_description"> | undefined;
}
