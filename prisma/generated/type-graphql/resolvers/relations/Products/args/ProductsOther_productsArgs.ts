import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProductsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ProductsOrderByWithRelationAndSearchRelevanceInput";
import { ProductsWhereInput } from "../../../inputs/ProductsWhereInput";
import { ProductsWhereUniqueInput } from "../../../inputs/ProductsWhereUniqueInput";
import { ProductsScalarFieldEnum } from "../../../../enums/ProductsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class ProductsOther_productsArgs {
  @TypeGraphQL.Field(_type => ProductsWhereInput, {
    nullable: true
  })
  where?: ProductsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProductsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: ProductsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: true
  })
  cursor?: ProductsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ProductsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "sku" | "thumbnail" | "name" | "types" | "attributes" | "price" | "quantity_per_source" | "salable_quantity" | "visibility" | "status" | "websites" | "product" | "tax_class" | "stock_status" | "weight" | "categories" | "created_at" | "country" | "size" | "format" | "height" | "content" | "short_description" | "image" | "meta_title" | "meta_keywords" | "meta_description" | "meta_url" | "file" | "manufacture" | "part_number" | "contract" | "cost_string" | "manufacturer_part_number" | "related_product" | "tags" | "brand" | "occassions" | "customer_type" | "family" | "zone" | "variants"> | undefined;
}
