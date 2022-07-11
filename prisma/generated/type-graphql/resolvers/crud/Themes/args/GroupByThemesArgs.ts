import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThemesOrderByWithAggregationInput } from "../../../inputs/ThemesOrderByWithAggregationInput";
import { ThemesScalarWhereWithAggregatesInput } from "../../../inputs/ThemesScalarWhereWithAggregatesInput";
import { ThemesWhereInput } from "../../../inputs/ThemesWhereInput";
import { ThemesScalarFieldEnum } from "../../../../enums/ThemesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByThemesArgs {
  @TypeGraphQL.Field(_type => ThemesWhereInput, {
    nullable: true
  })
  where?: ThemesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ThemesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ThemesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThemesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "title" | "parent_theme" | "theme_path" | "action" | "website_id">;

  @TypeGraphQL.Field(_type => ThemesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ThemesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
