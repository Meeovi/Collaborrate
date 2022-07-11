import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmailsUpdateManyWithoutUsersNestedInput } from "../inputs/EmailsUpdateManyWithoutUsersNestedInput";
import { MediamanagerUpdateManyWithoutUsersNestedInput } from "../inputs/MediamanagerUpdateManyWithoutUsersNestedInput";
import { MessagesUpdateManyWithoutUsersNestedInput } from "../inputs/MessagesUpdateManyWithoutUsersNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProjectsUpdateManyWithoutUsersNestedInput } from "../inputs/ProjectsUpdateManyWithoutUsersNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("UsersUpdateWithoutWorkspacesInput", {
  isAbstract: true
})
export class UsersUpdateWithoutWorkspacesInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  username?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  first_name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  last_name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  interface_locale?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  value?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  permissions?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EmailsUpdateManyWithoutUsersNestedInput, {
    nullable: true
  })
  emails?: EmailsUpdateManyWithoutUsersNestedInput | undefined;

  @TypeGraphQL.Field(_type => MediamanagerUpdateManyWithoutUsersNestedInput, {
    nullable: true
  })
  mediamanager?: MediamanagerUpdateManyWithoutUsersNestedInput | undefined;

  @TypeGraphQL.Field(_type => MessagesUpdateManyWithoutUsersNestedInput, {
    nullable: true
  })
  messages?: MessagesUpdateManyWithoutUsersNestedInput | undefined;

  @TypeGraphQL.Field(_type => ProjectsUpdateManyWithoutUsersNestedInput, {
    nullable: true
  })
  projects?: ProjectsUpdateManyWithoutUsersNestedInput | undefined;
}
