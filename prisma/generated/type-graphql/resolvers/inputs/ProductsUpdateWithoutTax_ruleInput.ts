import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { BrandsUpdateManyWithoutProductsNestedInput } from "../inputs/BrandsUpdateManyWithoutProductsNestedInput";
import { CouponsUpdateManyWithoutProducts_couponsToproductsNestedInput } from "../inputs/CouponsUpdateManyWithoutProducts_couponsToproductsNestedInput";
import { Credit_memosUpdateManyWithoutProductsNestedInput } from "../inputs/Credit_memosUpdateManyWithoutProductsNestedInput";
import { ManufacturerUpdateManyWithoutProductsNestedInput } from "../inputs/ManufacturerUpdateManyWithoutProductsNestedInput";
import { MediamanagerUpdateManyWithoutProducts_mediamanagerToproductsNestedInput } from "../inputs/MediamanagerUpdateManyWithoutProducts_mediamanagerToproductsNestedInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OccassionsUpdateManyWithoutProducts_occassionsToproductsNestedInput } from "../inputs/OccassionsUpdateManyWithoutProducts_occassionsToproductsNestedInput";
import { OrdersUpdateManyWithoutProductsNestedInput } from "../inputs/OrdersUpdateManyWithoutProductsNestedInput";
import { Product_attributeUpdateManyWithoutProductsNestedInput } from "../inputs/Product_attributeUpdateManyWithoutProductsNestedInput";
import { Product_typesUpdateManyWithoutProductsNestedInput } from "../inputs/Product_typesUpdateManyWithoutProductsNestedInput";
import { ProductsUpdateManyWithoutProductsNestedInput } from "../inputs/ProductsUpdateManyWithoutProductsNestedInput";
import { ProductsUpdateOneWithoutOther_productsNestedInput } from "../inputs/ProductsUpdateOneWithoutOther_productsNestedInput";
import { QuotesUpdateManyWithoutProducts_productsToquotesNestedInput } from "../inputs/QuotesUpdateManyWithoutProducts_productsToquotesNestedInput";
import { RatingUpdateManyWithoutProductsNestedInput } from "../inputs/RatingUpdateManyWithoutProductsNestedInput";
import { ReturnsUpdateManyWithoutProductsNestedInput } from "../inputs/ReturnsUpdateManyWithoutProductsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { Tax_rateUpdateManyWithoutProductsNestedInput } from "../inputs/Tax_rateUpdateManyWithoutProductsNestedInput";
import { TrainingsUpdateManyWithoutProducts_productsTotrainingsNestedInput } from "../inputs/TrainingsUpdateManyWithoutProducts_productsTotrainingsNestedInput";
import { WorkspacesUpdateManyWithoutProducts_productsToworkspacesNestedInput } from "../inputs/WorkspacesUpdateManyWithoutProducts_productsToworkspacesNestedInput";

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

  @TypeGraphQL.Field(_type => ProductsUpdateOneWithoutOther_productsNestedInput, {
    nullable: true
  })
  products?: ProductsUpdateOneWithoutOther_productsNestedInput | undefined;

  @TypeGraphQL.Field(_type => BrandsUpdateManyWithoutProductsNestedInput, {
    nullable: true
  })
  brands?: BrandsUpdateManyWithoutProductsNestedInput | undefined;

  @TypeGraphQL.Field(_type => CouponsUpdateManyWithoutProducts_couponsToproductsNestedInput, {
    nullable: true
  })
  coupons?: CouponsUpdateManyWithoutProducts_couponsToproductsNestedInput | undefined;

  @TypeGraphQL.Field(_type => Credit_memosUpdateManyWithoutProductsNestedInput, {
    nullable: true
  })
  credit_memos?: Credit_memosUpdateManyWithoutProductsNestedInput | undefined;

  @TypeGraphQL.Field(_type => ManufacturerUpdateManyWithoutProductsNestedInput, {
    nullable: true
  })
  manufacturer?: ManufacturerUpdateManyWithoutProductsNestedInput | undefined;

  @TypeGraphQL.Field(_type => MediamanagerUpdateManyWithoutProducts_mediamanagerToproductsNestedInput, {
    nullable: true
  })
  mediamanager?: MediamanagerUpdateManyWithoutProducts_mediamanagerToproductsNestedInput | undefined;

  @TypeGraphQL.Field(_type => OccassionsUpdateManyWithoutProducts_occassionsToproductsNestedInput, {
    nullable: true
  })
  occassions_occassionsToproducts?: OccassionsUpdateManyWithoutProducts_occassionsToproductsNestedInput | undefined;

  @TypeGraphQL.Field(_type => OrdersUpdateManyWithoutProductsNestedInput, {
    nullable: true
  })
  orders?: OrdersUpdateManyWithoutProductsNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_attributeUpdateManyWithoutProductsNestedInput, {
    nullable: true
  })
  product_attribute?: Product_attributeUpdateManyWithoutProductsNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_typesUpdateManyWithoutProductsNestedInput, {
    nullable: true
  })
  product_types?: Product_typesUpdateManyWithoutProductsNestedInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpdateManyWithoutProductsNestedInput, {
    nullable: true
  })
  other_products?: ProductsUpdateManyWithoutProductsNestedInput | undefined;

  @TypeGraphQL.Field(_type => QuotesUpdateManyWithoutProducts_productsToquotesNestedInput, {
    nullable: true
  })
  quotes?: QuotesUpdateManyWithoutProducts_productsToquotesNestedInput | undefined;

  @TypeGraphQL.Field(_type => RatingUpdateManyWithoutProductsNestedInput, {
    nullable: true
  })
  rating?: RatingUpdateManyWithoutProductsNestedInput | undefined;

  @TypeGraphQL.Field(_type => ReturnsUpdateManyWithoutProductsNestedInput, {
    nullable: true
  })
  returns?: ReturnsUpdateManyWithoutProductsNestedInput | undefined;

  @TypeGraphQL.Field(_type => Tax_rateUpdateManyWithoutProductsNestedInput, {
    nullable: true
  })
  tax_rate?: Tax_rateUpdateManyWithoutProductsNestedInput | undefined;

  @TypeGraphQL.Field(_type => TrainingsUpdateManyWithoutProducts_productsTotrainingsNestedInput, {
    nullable: true
  })
  trainings?: TrainingsUpdateManyWithoutProducts_productsTotrainingsNestedInput | undefined;

  @TypeGraphQL.Field(_type => WorkspacesUpdateManyWithoutProducts_productsToworkspacesNestedInput, {
    nullable: true
  })
  workspaces?: WorkspacesUpdateManyWithoutProducts_productsToworkspacesNestedInput | undefined;
}
