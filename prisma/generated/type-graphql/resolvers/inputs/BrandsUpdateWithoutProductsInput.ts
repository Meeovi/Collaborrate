import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { MediamanagerUpdateManyWithoutBrands_brandsTomediamanagerNestedInput } from "../inputs/MediamanagerUpdateManyWithoutBrands_brandsTomediamanagerNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { WorkspacesUpdateManyWithoutBrands_brandsToworkspacesNestedInput } from "../inputs/WorkspacesUpdateManyWithoutBrands_brandsToworkspacesNestedInput";

@TypeGraphQL.InputType("BrandsUpdateWithoutProductsInput", {
  isAbstract: true
})
export class BrandsUpdateWithoutProductsInput {
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
  country?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  state?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  isPublic?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  city?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  media?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MediamanagerUpdateManyWithoutBrands_brandsTomediamanagerNestedInput, {
    nullable: true
  })
  mediamanager?: MediamanagerUpdateManyWithoutBrands_brandsTomediamanagerNestedInput | undefined;

  @TypeGraphQL.Field(_type => WorkspacesUpdateManyWithoutBrands_brandsToworkspacesNestedInput, {
    nullable: true
  })
  workspaces?: WorkspacesUpdateManyWithoutBrands_brandsToworkspacesNestedInput | undefined;
}
