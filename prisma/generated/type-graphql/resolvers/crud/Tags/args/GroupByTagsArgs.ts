import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagsOrderByWithAggregationInput } from "../../../inputs/TagsOrderByWithAggregationInput";
import { TagsScalarWhereWithAggregatesInput } from "../../../inputs/TagsScalarWhereWithAggregatesInput";
import { TagsWhereInput } from "../../../inputs/TagsWhereInput";
import { TagsScalarFieldEnum } from "../../../../enums/TagsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTagsArgs {
  @TypeGraphQL.Field(_type => TagsWhereInput, {
    nullable: true
  })
  where?: TagsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TagsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TagsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "excerpt" | "categories" | "articles" | "products" | "customers" | "users">;

  @TypeGraphQL.Field(_type => TagsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TagsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
