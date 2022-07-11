import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AgreementsUpdateOneWithoutMediamanagerNestedInput } from "../inputs/AgreementsUpdateOneWithoutMediamanagerNestedInput";
import { BrandsUpdateOneWithoutMediamanagerNestedInput } from "../inputs/BrandsUpdateOneWithoutMediamanagerNestedInput";
import { CommentsUpdateOneWithoutMediamanagerNestedInput } from "../inputs/CommentsUpdateOneWithoutMediamanagerNestedInput";
import { CustomersUpdateOneWithoutMediamanagerNestedInput } from "../inputs/CustomersUpdateOneWithoutMediamanagerNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProductsUpdateOneWithoutMediamanagerNestedInput } from "../inputs/ProductsUpdateOneWithoutMediamanagerNestedInput";
import { TasksUpdateOneWithoutMediamanagerNestedInput } from "../inputs/TasksUpdateOneWithoutMediamanagerNestedInput";
import { UsersUpdateOneWithoutMediamanagerNestedInput } from "../inputs/UsersUpdateOneWithoutMediamanagerNestedInput";

@TypeGraphQL.InputType("MediamanagerUpdateInput", {
  isAbstract: true
})
export class MediamanagerUpdateInput {
  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  media?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  keywords?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  tags?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  status?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  expiration_date?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  copyright?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  dimensions?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  content_type?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  versions?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  watermark_name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  watermark_description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  watermark_media?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  albums?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  workspace?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  task_description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  task_type?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => AgreementsUpdateOneWithoutMediamanagerNestedInput, {
    nullable: true
  })
  agreements_agreementsTomediamanager?: AgreementsUpdateOneWithoutMediamanagerNestedInput | undefined;

  @TypeGraphQL.Field(_type => CustomersUpdateOneWithoutMediamanagerNestedInput, {
    nullable: true
  })
  customers?: CustomersUpdateOneWithoutMediamanagerNestedInput | undefined;

  @TypeGraphQL.Field(_type => BrandsUpdateOneWithoutMediamanagerNestedInput, {
    nullable: true
  })
  brands_brandsTomediamanager?: BrandsUpdateOneWithoutMediamanagerNestedInput | undefined;

  @TypeGraphQL.Field(_type => CommentsUpdateOneWithoutMediamanagerNestedInput, {
    nullable: true
  })
  comments?: CommentsUpdateOneWithoutMediamanagerNestedInput | undefined;

  @TypeGraphQL.Field(_type => UsersUpdateOneWithoutMediamanagerNestedInput, {
    nullable: true
  })
  users?: UsersUpdateOneWithoutMediamanagerNestedInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpdateOneWithoutMediamanagerNestedInput, {
    nullable: true
  })
  products_mediamanagerToproducts?: ProductsUpdateOneWithoutMediamanagerNestedInput | undefined;

  @TypeGraphQL.Field(_type => TasksUpdateOneWithoutMediamanagerNestedInput, {
    nullable: true
  })
  tasks?: TasksUpdateOneWithoutMediamanagerNestedInput | undefined;
}
