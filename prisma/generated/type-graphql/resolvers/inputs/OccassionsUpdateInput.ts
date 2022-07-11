import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProductsUpdateOneWithoutOccassions_occassionsToproductsNestedInput } from "../inputs/ProductsUpdateOneWithoutOccassions_occassionsToproductsNestedInput";
import { WishlistsUpdateOneWithoutOccassionsNestedInput } from "../inputs/WishlistsUpdateOneWithoutOccassionsNestedInput";

@TypeGraphQL.InputType("OccassionsUpdateInput", {
  isAbstract: true
})
export class OccassionsUpdateInput {
  @TypeGraphQL.Field(_type => BigIntFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BigIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  code?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  category?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  tags?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpdateOneWithoutOccassions_occassionsToproductsNestedInput, {
    nullable: true
  })
  products_occassionsToproducts?: ProductsUpdateOneWithoutOccassions_occassionsToproductsNestedInput | undefined;

  @TypeGraphQL.Field(_type => WishlistsUpdateOneWithoutOccassionsNestedInput, {
    nullable: true
  })
  wishlists_occassionsTowishlists?: WishlistsUpdateOneWithoutOccassionsNestedInput | undefined;
}
