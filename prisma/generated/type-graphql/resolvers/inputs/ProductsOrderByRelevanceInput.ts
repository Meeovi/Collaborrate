import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsOrderByRelevanceFieldEnum } from "../../enums/ProductsOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ProductsOrderByRelevanceInput", {
  isAbstract: true
})
export class ProductsOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [ProductsOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"thumbnail" | "name" | "types" | "attributes" | "price" | "quantity_per_source" | "salable_quantity" | "visibility" | "websites" | "product" | "tax_class" | "stock_status" | "weight" | "categories" | "country" | "size" | "format" | "height" | "content" | "short_description" | "image" | "meta_title" | "meta_keywords" | "meta_description" | "meta_url" | "file" | "manufacture" | "part_number" | "contract" | "cost_string" | "manufacturer_part_number" | "tags" | "brand" | "occassions" | "customer_type" | "family" | "zone" | "variants">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
