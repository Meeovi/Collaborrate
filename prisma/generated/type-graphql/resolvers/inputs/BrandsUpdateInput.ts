import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { MediamanagerUpdateManyWithoutBrands_brandsTomediamanagerInput } from "../inputs/MediamanagerUpdateManyWithoutBrands_brandsTomediamanagerInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProductsUpdateOneWithoutBrandsInput } from "../inputs/ProductsUpdateOneWithoutBrandsInput";
import { WorkspacesUpdateManyWithoutBrands_brandsToworkspacesInput } from "../inputs/WorkspacesUpdateManyWithoutBrands_brandsToworkspacesInput";

@TypeGraphQL.InputType("BrandsUpdateInput", {
  isAbstract: true
})
export class BrandsUpdateInput {
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

  @TypeGraphQL.Field(_type => ProductsUpdateOneWithoutBrandsInput, {
    nullable: true
  })
  products?: ProductsUpdateOneWithoutBrandsInput | undefined;

  @TypeGraphQL.Field(_type => MediamanagerUpdateManyWithoutBrands_brandsTomediamanagerInput, {
    nullable: true
  })
  mediamanager?: MediamanagerUpdateManyWithoutBrands_brandsTomediamanagerInput | undefined;

  @TypeGraphQL.Field(_type => WorkspacesUpdateManyWithoutBrands_brandsToworkspacesInput, {
    nullable: true
  })
  workspaces?: WorkspacesUpdateManyWithoutBrands_brandsToworkspacesInput | undefined;
}
