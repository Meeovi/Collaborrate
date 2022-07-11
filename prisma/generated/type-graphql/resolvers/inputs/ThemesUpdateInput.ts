import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { WebsitesUpdateOneRequiredWithoutThemesNestedInput } from "../inputs/WebsitesUpdateOneRequiredWithoutThemesNestedInput";

@TypeGraphQL.InputType("ThemesUpdateInput", {
  isAbstract: true
})
export class ThemesUpdateInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  parent_theme?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  theme_path?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  action?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => WebsitesUpdateOneRequiredWithoutThemesNestedInput, {
    nullable: true
  })
  websites?: WebsitesUpdateOneRequiredWithoutThemesNestedInput | undefined;
}
