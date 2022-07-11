import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { BigIntNullableFilter } from "../inputs/BigIntNullableFilter";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { BrandsListRelationFilter } from "../inputs/BrandsListRelationFilter";
import { CouponsListRelationFilter } from "../inputs/CouponsListRelationFilter";
import { Credit_memosListRelationFilter } from "../inputs/Credit_memosListRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { ManufacturerListRelationFilter } from "../inputs/ManufacturerListRelationFilter";
import { MediamanagerListRelationFilter } from "../inputs/MediamanagerListRelationFilter";
import { OccassionsListRelationFilter } from "../inputs/OccassionsListRelationFilter";
import { OrdersListRelationFilter } from "../inputs/OrdersListRelationFilter";
import { Product_attributeListRelationFilter } from "../inputs/Product_attributeListRelationFilter";
import { Product_typesListRelationFilter } from "../inputs/Product_typesListRelationFilter";
import { ProductsListRelationFilter } from "../inputs/ProductsListRelationFilter";
import { ProductsRelationFilter } from "../inputs/ProductsRelationFilter";
import { QuotesListRelationFilter } from "../inputs/QuotesListRelationFilter";
import { RatingListRelationFilter } from "../inputs/RatingListRelationFilter";
import { ReturnsListRelationFilter } from "../inputs/ReturnsListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { Tax_rateListRelationFilter } from "../inputs/Tax_rateListRelationFilter";
import { Tax_ruleListRelationFilter } from "../inputs/Tax_ruleListRelationFilter";
import { TrainingsListRelationFilter } from "../inputs/TrainingsListRelationFilter";
import { WorkspacesListRelationFilter } from "../inputs/WorkspacesListRelationFilter";

@TypeGraphQL.InputType("ProductsWhereInput", {
  isAbstract: true
})
export class ProductsWhereInput {
  @TypeGraphQL.Field(_type => [ProductsWhereInput], {
    nullable: true
  })
  AND?: ProductsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductsWhereInput], {
    nullable: true
  })
  OR?: ProductsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductsWhereInput], {
    nullable: true
  })
  NOT?: ProductsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  id?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  sku?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  thumbnail?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  types?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  attributes?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  price?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  quantity_per_source?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  salable_quantity?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  visibility?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  status?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  websites?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  product?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  tax_class?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  stock_status?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  weight?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  categories?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  created_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  country?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  size?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  format?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  height?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  content?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  short_description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  image?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  meta_title?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  meta_keywords?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  meta_description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  meta_url?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  file?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  manufacture?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  part_number?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  contract?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  cost_string?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  manufacturer_part_number?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntNullableFilter, {
    nullable: true
  })
  related_product?: BigIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  tags?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  brand?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  occassions?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  customer_type?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  family?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  zone?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  variants?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => ProductsRelationFilter, {
    nullable: true
  })
  products?: ProductsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BrandsListRelationFilter, {
    nullable: true
  })
  brands?: BrandsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CouponsListRelationFilter, {
    nullable: true
  })
  coupons?: CouponsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Credit_memosListRelationFilter, {
    nullable: true
  })
  credit_memos?: Credit_memosListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ManufacturerListRelationFilter, {
    nullable: true
  })
  manufacturer?: ManufacturerListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MediamanagerListRelationFilter, {
    nullable: true
  })
  mediamanager?: MediamanagerListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => OccassionsListRelationFilter, {
    nullable: true
  })
  occassions_occassionsToproducts?: OccassionsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => OrdersListRelationFilter, {
    nullable: true
  })
  orders?: OrdersListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_attributeListRelationFilter, {
    nullable: true
  })
  product_attribute?: Product_attributeListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_typesListRelationFilter, {
    nullable: true
  })
  product_types?: Product_typesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProductsListRelationFilter, {
    nullable: true
  })
  other_products?: ProductsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => QuotesListRelationFilter, {
    nullable: true
  })
  quotes?: QuotesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => RatingListRelationFilter, {
    nullable: true
  })
  rating?: RatingListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ReturnsListRelationFilter, {
    nullable: true
  })
  returns?: ReturnsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Tax_rateListRelationFilter, {
    nullable: true
  })
  tax_rate?: Tax_rateListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Tax_ruleListRelationFilter, {
    nullable: true
  })
  tax_rule?: Tax_ruleListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TrainingsListRelationFilter, {
    nullable: true
  })
  trainings?: TrainingsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => WorkspacesListRelationFilter, {
    nullable: true
  })
  workspaces?: WorkspacesListRelationFilter | undefined;
}
