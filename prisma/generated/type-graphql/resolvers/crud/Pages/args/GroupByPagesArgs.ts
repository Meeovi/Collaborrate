import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PagesOrderByWithAggregationInput } from "../../../inputs/PagesOrderByWithAggregationInput";
import { PagesScalarWhereWithAggregatesInput } from "../../../inputs/PagesScalarWhereWithAggregatesInput";
import { PagesWhereInput } from "../../../inputs/PagesWhereInput";
import { PagesScalarFieldEnum } from "../../../../enums/PagesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPagesArgs {
  @TypeGraphQL.Field(_type => PagesWhereInput, {
    nullable: true
  })
  where?: PagesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PagesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PagesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PagesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "enable_page" | "title" | "content_title" | "content" | "url_key" | "meta_title" | "meta_keywords" | "meta_description">;

  @TypeGraphQL.Field(_type => PagesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PagesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
