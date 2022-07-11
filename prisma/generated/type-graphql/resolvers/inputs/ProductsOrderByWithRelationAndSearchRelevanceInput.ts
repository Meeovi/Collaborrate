import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BrandsOrderByRelationAggregateInput } from "../inputs/BrandsOrderByRelationAggregateInput";
import { CouponsOrderByRelationAggregateInput } from "../inputs/CouponsOrderByRelationAggregateInput";
import { Credit_memosOrderByRelationAggregateInput } from "../inputs/Credit_memosOrderByRelationAggregateInput";
import { ManufacturerOrderByRelationAggregateInput } from "../inputs/ManufacturerOrderByRelationAggregateInput";
import { MediamanagerOrderByRelationAggregateInput } from "../inputs/MediamanagerOrderByRelationAggregateInput";
import { OccassionsOrderByRelationAggregateInput } from "../inputs/OccassionsOrderByRelationAggregateInput";
import { OrdersOrderByRelationAggregateInput } from "../inputs/OrdersOrderByRelationAggregateInput";
import { Product_attributeOrderByRelationAggregateInput } from "../inputs/Product_attributeOrderByRelationAggregateInput";
import { Product_typesOrderByRelationAggregateInput } from "../inputs/Product_typesOrderByRelationAggregateInput";
import { ProductsOrderByRelationAggregateInput } from "../inputs/ProductsOrderByRelationAggregateInput";
import { ProductsOrderByRelevanceInput } from "../inputs/ProductsOrderByRelevanceInput";
import { QuotesOrderByRelationAggregateInput } from "../inputs/QuotesOrderByRelationAggregateInput";
import { RatingOrderByRelationAggregateInput } from "../inputs/RatingOrderByRelationAggregateInput";
import { ReturnsOrderByRelationAggregateInput } from "../inputs/ReturnsOrderByRelationAggregateInput";
import { Tax_rateOrderByRelationAggregateInput } from "../inputs/Tax_rateOrderByRelationAggregateInput";
import { Tax_ruleOrderByRelationAggregateInput } from "../inputs/Tax_ruleOrderByRelationAggregateInput";
import { TrainingsOrderByRelationAggregateInput } from "../inputs/TrainingsOrderByRelationAggregateInput";
import { WorkspacesOrderByRelationAggregateInput } from "../inputs/WorkspacesOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ProductsOrderByWithRelationAndSearchRelevanceInput", {
  isAbstract: true
})
export class ProductsOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sku?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  thumbnail?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  types?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  attributes?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  price?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  quantity_per_source?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  salable_quantity?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  visibility?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  websites?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  product?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tax_class?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  stock_status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  weight?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  categories?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  country?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  size?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  format?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  height?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  content?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  short_description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  image?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  meta_title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  meta_keywords?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  meta_description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  meta_url?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  file?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  manufacture?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  part_number?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  contract?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cost_string?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  manufacturer_part_number?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  related_product?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tags?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  brand?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  occassions?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  customer_type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  family?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  zone?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  variants?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProductsOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  products?: ProductsOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => BrandsOrderByRelationAggregateInput, {
    nullable: true
  })
  brands?: BrandsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CouponsOrderByRelationAggregateInput, {
    nullable: true
  })
  coupons?: CouponsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Credit_memosOrderByRelationAggregateInput, {
    nullable: true
  })
  credit_memos?: Credit_memosOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ManufacturerOrderByRelationAggregateInput, {
    nullable: true
  })
  manufacturer?: ManufacturerOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MediamanagerOrderByRelationAggregateInput, {
    nullable: true
  })
  mediamanager?: MediamanagerOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OccassionsOrderByRelationAggregateInput, {
    nullable: true
  })
  occassions_occassionsToproducts?: OccassionsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OrdersOrderByRelationAggregateInput, {
    nullable: true
  })
  orders?: OrdersOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_attributeOrderByRelationAggregateInput, {
    nullable: true
  })
  product_attribute?: Product_attributeOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_typesOrderByRelationAggregateInput, {
    nullable: true
  })
  product_types?: Product_typesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProductsOrderByRelationAggregateInput, {
    nullable: true
  })
  other_products?: ProductsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => QuotesOrderByRelationAggregateInput, {
    nullable: true
  })
  quotes?: QuotesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RatingOrderByRelationAggregateInput, {
    nullable: true
  })
  rating?: RatingOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReturnsOrderByRelationAggregateInput, {
    nullable: true
  })
  returns?: ReturnsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Tax_rateOrderByRelationAggregateInput, {
    nullable: true
  })
  tax_rate?: Tax_rateOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Tax_ruleOrderByRelationAggregateInput, {
    nullable: true
  })
  tax_rule?: Tax_ruleOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TrainingsOrderByRelationAggregateInput, {
    nullable: true
  })
  trainings?: TrainingsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WorkspacesOrderByRelationAggregateInput, {
    nullable: true
  })
  workspaces?: WorkspacesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProductsOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: ProductsOrderByRelevanceInput | undefined;
}
