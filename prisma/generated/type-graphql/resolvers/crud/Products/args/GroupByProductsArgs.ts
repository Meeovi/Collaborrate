import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProductsOrderByWithAggregationInput } from "../../../inputs/ProductsOrderByWithAggregationInput";
import { ProductsScalarWhereWithAggregatesInput } from "../../../inputs/ProductsScalarWhereWithAggregatesInput";
import { ProductsWhereInput } from "../../../inputs/ProductsWhereInput";
import { ProductsScalarFieldEnum } from "../../../../enums/ProductsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProductsArgs {
  @TypeGraphQL.Field(_type => ProductsWhereInput, {
    nullable: true
  })
  where?: ProductsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProductsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ProductsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "sku" | "thumbnail" | "name" | "types" | "attributes" | "price" | "quantity_per_source" | "salable_quantity" | "visibility" | "status" | "websites" | "product" | "tax_class" | "stock_status" | "weight" | "categories" | "created_at" | "country" | "size" | "format" | "height" | "content" | "short_description" | "image" | "meta_title" | "meta_keywords" | "meta_description" | "meta_url" | "file" | "manufacture" | "part_number" | "contract" | "cost_string" | "manufacturer_part_number" | "related_product" | "tags" | "brand" | "occassions" | "customer_type" | "family" | "zone" | "variants">;

  @TypeGraphQL.Field(_type => ProductsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ProductsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
