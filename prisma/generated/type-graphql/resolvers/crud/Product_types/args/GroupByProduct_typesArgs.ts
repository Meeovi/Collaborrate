import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_typesOrderByWithAggregationInput } from "../../../inputs/Product_typesOrderByWithAggregationInput";
import { Product_typesScalarWhereWithAggregatesInput } from "../../../inputs/Product_typesScalarWhereWithAggregatesInput";
import { Product_typesWhereInput } from "../../../inputs/Product_typesWhereInput";
import { Product_typesScalarFieldEnum } from "../../../../enums/Product_typesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProduct_typesArgs {
  @TypeGraphQL.Field(_type => Product_typesWhereInput, {
    nullable: true
  })
  where?: Product_typesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_typesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Product_typesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_typesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "type_name" | "taxes" | "isShippable" | "meta_url" | "meta_description" | "filter_options" | "product_type" | "prod_id">;

  @TypeGraphQL.Field(_type => Product_typesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Product_typesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
