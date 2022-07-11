import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoriesOrderByWithAggregationInput } from "../../../inputs/CategoriesOrderByWithAggregationInput";
import { CategoriesScalarWhereWithAggregatesInput } from "../../../inputs/CategoriesScalarWhereWithAggregatesInput";
import { CategoriesWhereInput } from "../../../inputs/CategoriesWhereInput";
import { CategoriesScalarFieldEnum } from "../../../../enums/CategoriesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCategoriesArgs {
  @TypeGraphQL.Field(_type => CategoriesWhereInput, {
    nullable: true
  })
  where?: CategoriesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CategoriesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CategoriesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoriesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "thumbnail" | "name" | "visibility" | "status" | "websites" | "product" | "country" | "description" | "content" | "image" | "meta_title" | "meta_keywords" | "meta_description" | "meta_url">;

  @TypeGraphQL.Field(_type => CategoriesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CategoriesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
