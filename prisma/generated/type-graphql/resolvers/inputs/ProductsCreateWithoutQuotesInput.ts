import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BrandsCreateNestedManyWithoutProductsInput } from "../inputs/BrandsCreateNestedManyWithoutProductsInput";
import { CouponsCreateNestedManyWithoutProducts_couponsToproductsInput } from "../inputs/CouponsCreateNestedManyWithoutProducts_couponsToproductsInput";
import { Credit_memosCreateNestedManyWithoutProductsInput } from "../inputs/Credit_memosCreateNestedManyWithoutProductsInput";
import { ManufacturerCreateNestedManyWithoutProductsInput } from "../inputs/ManufacturerCreateNestedManyWithoutProductsInput";
import { MediamanagerCreateNestedManyWithoutProducts_mediamanagerToproductsInput } from "../inputs/MediamanagerCreateNestedManyWithoutProducts_mediamanagerToproductsInput";
import { OccassionsCreateNestedManyWithoutProducts_occassionsToproductsInput } from "../inputs/OccassionsCreateNestedManyWithoutProducts_occassionsToproductsInput";
import { OrdersCreateNestedManyWithoutProductsInput } from "../inputs/OrdersCreateNestedManyWithoutProductsInput";
import { Product_attributeCreateNestedManyWithoutProductsInput } from "../inputs/Product_attributeCreateNestedManyWithoutProductsInput";
import { Product_typesCreateNestedManyWithoutProductsInput } from "../inputs/Product_typesCreateNestedManyWithoutProductsInput";
import { ProductsCreateNestedManyWithoutProductsInput } from "../inputs/ProductsCreateNestedManyWithoutProductsInput";
import { ProductsCreateNestedOneWithoutOther_productsInput } from "../inputs/ProductsCreateNestedOneWithoutOther_productsInput";
import { RatingCreateNestedManyWithoutProductsInput } from "../inputs/RatingCreateNestedManyWithoutProductsInput";
import { ReturnsCreateNestedManyWithoutProductsInput } from "../inputs/ReturnsCreateNestedManyWithoutProductsInput";
import { Tax_rateCreateNestedManyWithoutProductsInput } from "../inputs/Tax_rateCreateNestedManyWithoutProductsInput";
import { Tax_ruleCreateNestedManyWithoutProductsInput } from "../inputs/Tax_ruleCreateNestedManyWithoutProductsInput";
import { TrainingsCreateNestedManyWithoutProducts_productsTotrainingsInput } from "../inputs/TrainingsCreateNestedManyWithoutProducts_productsTotrainingsInput";
import { WorkspacesCreateNestedManyWithoutProducts_productsToworkspacesInput } from "../inputs/WorkspacesCreateNestedManyWithoutProducts_productsToworkspacesInput";

@TypeGraphQL.InputType("ProductsCreateWithoutQuotesInput", {
  isAbstract: true
})
export class ProductsCreateWithoutQuotesInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  id?: bigint | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  sku?: bigint | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  thumbnail?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  types?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  attributes?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  price?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  quantity_per_source?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  salable_quantity?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  visibility?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  status?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  websites?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  product?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tax_class?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  stock_status?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  weight?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  categories?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  size?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  format?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  height?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  short_description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_title?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_keywords?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_url?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  file?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  manufacture?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  part_number?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  contract?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  cost_string?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  manufacturer_part_number?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tags?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  brand?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  occassions?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customer_type?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  family?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  zone?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  variants?: string | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateNestedOneWithoutOther_productsInput, {
    nullable: true
  })
  products?: ProductsCreateNestedOneWithoutOther_productsInput | undefined;

  @TypeGraphQL.Field(_type => BrandsCreateNestedManyWithoutProductsInput, {
    nullable: true
  })
  brands?: BrandsCreateNestedManyWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => CouponsCreateNestedManyWithoutProducts_couponsToproductsInput, {
    nullable: true
  })
  coupons?: CouponsCreateNestedManyWithoutProducts_couponsToproductsInput | undefined;

  @TypeGraphQL.Field(_type => Credit_memosCreateNestedManyWithoutProductsInput, {
    nullable: true
  })
  credit_memos?: Credit_memosCreateNestedManyWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => ManufacturerCreateNestedManyWithoutProductsInput, {
    nullable: true
  })
  manufacturer?: ManufacturerCreateNestedManyWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => MediamanagerCreateNestedManyWithoutProducts_mediamanagerToproductsInput, {
    nullable: true
  })
  mediamanager?: MediamanagerCreateNestedManyWithoutProducts_mediamanagerToproductsInput | undefined;

  @TypeGraphQL.Field(_type => OccassionsCreateNestedManyWithoutProducts_occassionsToproductsInput, {
    nullable: true
  })
  occassions_occassionsToproducts?: OccassionsCreateNestedManyWithoutProducts_occassionsToproductsInput | undefined;

  @TypeGraphQL.Field(_type => OrdersCreateNestedManyWithoutProductsInput, {
    nullable: true
  })
  orders?: OrdersCreateNestedManyWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => Product_attributeCreateNestedManyWithoutProductsInput, {
    nullable: true
  })
  product_attribute?: Product_attributeCreateNestedManyWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => Product_typesCreateNestedManyWithoutProductsInput, {
    nullable: true
  })
  product_types?: Product_typesCreateNestedManyWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateNestedManyWithoutProductsInput, {
    nullable: true
  })
  other_products?: ProductsCreateNestedManyWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => RatingCreateNestedManyWithoutProductsInput, {
    nullable: true
  })
  rating?: RatingCreateNestedManyWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => ReturnsCreateNestedManyWithoutProductsInput, {
    nullable: true
  })
  returns?: ReturnsCreateNestedManyWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => Tax_rateCreateNestedManyWithoutProductsInput, {
    nullable: true
  })
  tax_rate?: Tax_rateCreateNestedManyWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => Tax_ruleCreateNestedManyWithoutProductsInput, {
    nullable: true
  })
  tax_rule?: Tax_ruleCreateNestedManyWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => TrainingsCreateNestedManyWithoutProducts_productsTotrainingsInput, {
    nullable: true
  })
  trainings?: TrainingsCreateNestedManyWithoutProducts_productsTotrainingsInput | undefined;

  @TypeGraphQL.Field(_type => WorkspacesCreateNestedManyWithoutProducts_productsToworkspacesInput, {
    nullable: true
  })
  workspaces?: WorkspacesCreateNestedManyWithoutProducts_productsToworkspacesInput | undefined;
}
