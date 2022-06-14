import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerUpdateManyWithoutUsersInput } from "../inputs/MediamanagerUpdateManyWithoutUsersInput";
import { MessagesUpdateManyWithoutUsersInput } from "../inputs/MessagesUpdateManyWithoutUsersInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProjectsUpdateManyWithoutUsersInput } from "../inputs/ProjectsUpdateManyWithoutUsersInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { WorkspacesUpdateManyWithoutUsers_usersToworkspacesInput } from "../inputs/WorkspacesUpdateManyWithoutUsers_usersToworkspacesInput";

@TypeGraphQL.InputType("UsersUpdateWithoutEmailsInput", {
  isAbstract: true
})
export class UsersUpdateWithoutEmailsInput {
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

  @TypeGraphQL.Field(_type => MediamanagerUpdateManyWithoutUsersInput, {
    nullable: true
  })
  mediamanager?: MediamanagerUpdateManyWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => MessagesUpdateManyWithoutUsersInput, {
    nullable: true
  })
  messages?: MessagesUpdateManyWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => ProjectsUpdateManyWithoutUsersInput, {
    nullable: true
  })
  projects?: ProjectsUpdateManyWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => WorkspacesUpdateManyWithoutUsers_usersToworkspacesInput, {
    nullable: true
  })
  workspaces?: WorkspacesUpdateManyWithoutUsers_usersToworkspacesInput | undefined;
}
