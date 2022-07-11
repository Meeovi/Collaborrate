import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerUpdateManyWithoutCommentsNestedInput } from "../inputs/MediamanagerUpdateManyWithoutCommentsNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TrainingsUpdateManyWithoutCommentsNestedInput } from "../inputs/TrainingsUpdateManyWithoutCommentsNestedInput";

@TypeGraphQL.InputType("CommentsUpdateWithoutCustomersInput", {
  isAbstract: true
})
export class CommentsUpdateWithoutCustomersInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  customer_name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  image?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  response?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  published?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MediamanagerUpdateManyWithoutCommentsNestedInput, {
    nullable: true
  })
  mediamanager?: MediamanagerUpdateManyWithoutCommentsNestedInput | undefined;

  @TypeGraphQL.Field(_type => TrainingsUpdateManyWithoutCommentsNestedInput, {
    nullable: true
  })
  trainings?: TrainingsUpdateManyWithoutCommentsNestedInput | undefined;
}
