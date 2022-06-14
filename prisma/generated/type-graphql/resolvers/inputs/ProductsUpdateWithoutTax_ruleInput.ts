import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { BrandsUpdateManyWithoutProductsInput } from "../inputs/BrandsUpdateManyWithoutProductsInput";
import { CouponsUpdateManyWithoutProducts_couponsToproductsInput } from "../inputs/CouponsUpdateManyWithoutProducts_couponsToproductsInput";
import { Credit_memosUpdateManyWithoutProductsInput } from "../inputs/Credit_memosUpdateManyWithoutProductsInput";
import { ManufacturerUpdateManyWithoutProductsInput } from "../inputs/ManufacturerUpdateManyWithoutProductsInput";
import { MediamanagerUpdateManyWithoutProducts_mediamanagerToproductsInput } from "../inputs/MediamanagerUpdateManyWithoutProducts_mediamanagerToproductsInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OccassionsUpdateManyWithoutProducts_occassionsToproductsInput } from "../inputs/OccassionsUpdateManyWithoutProducts_occassionsToproductsInput";
import { OrdersUpdateManyWithoutProductsInput } from "../inputs/OrdersUpdateManyWithoutProductsInput";
import { Product_attributeUpdateManyWithoutProductsInput } from "../inputs/Product_attributeUpdateManyWithoutProductsInput";
import { Product_typesUpdateManyWithoutProductsInput } from "../inputs/Product_typesUpdateManyWithoutProductsInput";
import { ProductsUpdateManyWithoutProductsInput } from "../inputs/ProductsUpdateManyWithoutProductsInput";
import { ProductsUpdateOneWithoutOther_productsInput } from "../inputs/ProductsUpdateOneWithoutOther_productsInput";
import { QuotesUpdateManyWithoutProducts_productsToquotesInput } from "../inputs/QuotesUpdateManyWithoutProducts_productsToquotesInput";
import { RatingUpdateManyWithoutProductsInput } from "../inputs/RatingUpdateManyWithoutProductsInput";
import { ReturnsUpdateManyWithoutProductsInput } from "../inputs/ReturnsUpdateManyWithoutProductsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { Tax_rateUpdateManyWithoutProductsInput } from "../inputs/Tax_rateUpdateManyWithoutProductsInput";
import { WorkspacesUpdateManyWithoutProducts_productsToworkspacesInput } from "../inputs/WorkspacesUpdateManyWithoutProducts_productsToworkspacesInput";

@TypeGraphQL.InputType("ProductsUpdateWithoutTax_ruleInput", {
  isAbstract: true
})
export class ProductsUpdateWithoutTax_ruleInput {
  @TypeGraphQL.Field(_type => BigIntFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BigIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BigIntFieldUpdateOperationsInput, {
    nullable: true
  })
  sku?: BigIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  thumbnail?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  types?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  attributes?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  price?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  quantity_per_source?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  salable_quantity?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  visibility?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true
  })
  status?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  websites?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  product?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  tax_class?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  stock_status?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  weight?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  categories?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  country?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  size?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  format?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  height?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  content?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  short_description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  image?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  meta_title?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  meta_keywords?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  meta_description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  meta_url?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  file?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  manufacture?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  part_number?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  contract?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  cost_string?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  manufacturer_part_number?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  tags?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  brand?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  occassions?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  customer_type?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  family?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  zone?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  variants?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpdateOneWithoutOther_productsInput, {
    nullable: true
  })
  products?: ProductsUpdateOneWithoutOther_productsInput | undefined;

  @TypeGraphQL.Field(_type => BrandsUpdateManyWithoutProductsInput, {
    nullable: true
  })
  brands?: BrandsUpdateManyWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => CouponsUpdateManyWithoutProducts_couponsToproductsInput, {
    nullable: true
  })
  coupons?: CouponsUpdateManyWithoutProducts_couponsToproductsInput | undefined;

  @TypeGraphQL.Field(_type => Credit_memosUpdateManyWithoutProductsInput, {
    nullable: true
  })
  credit_memos?: Credit_memosUpdateManyWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => ManufacturerUpdateManyWithoutProductsInput, {
    nullable: true
  })
  manufacturer?: ManufacturerUpdateManyWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => MediamanagerUpdateManyWithoutProducts_mediamanagerToproductsInput, {
    nullable: true
  })
  mediamanager?: MediamanagerUpdateManyWithoutProducts_mediamanagerToproductsInput | undefined;

  @TypeGraphQL.Field(_type => OccassionsUpdateManyWithoutProducts_occassionsToproductsInput, {
    nullable: true
  })
  occassions_occassionsToproducts?: OccassionsUpdateManyWithoutProducts_occassionsToproductsInput | undefined;

  @TypeGraphQL.Field(_type => OrdersUpdateManyWithoutProductsInput, {
    nullable: true
  })
  orders?: OrdersUpdateManyWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => Product_attributeUpdateManyWithoutProductsInput, {
    nullable: true
  })
  product_attribute?: Product_attributeUpdateManyWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => Product_typesUpdateManyWithoutProductsInput, {
    nullable: true
  })
  product_types?: Product_typesUpdateManyWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpdateManyWithoutProductsInput, {
    nullable: true
  })
  other_products?: ProductsUpdateManyWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => QuotesUpdateManyWithoutProducts_productsToquotesInput, {
    nullable: true
  })
  quotes?: QuotesUpdateManyWithoutProducts_productsToquotesInput | undefined;

  @TypeGraphQL.Field(_type => RatingUpdateManyWithoutProductsInput, {
    nullable: true
  })
  rating?: RatingUpdateManyWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => ReturnsUpdateManyWithoutProductsInput, {
    nullable: true
  })
  returns?: ReturnsUpdateManyWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => Tax_rateUpdateManyWithoutProductsInput, {
    nullable: true
  })
  tax_rate?: Tax_rateUpdateManyWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => WorkspacesUpdateManyWithoutProducts_productsToworkspacesInput, {
    nullable: true
  })
  workspaces?: WorkspacesUpdateManyWithoutProducts_productsToworkspacesInput | undefined;
}
