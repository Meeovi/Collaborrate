import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmailsUpdateManyWithoutUsersNestedInput } from "../inputs/EmailsUpdateManyWithoutUsersNestedInput";
import { MessagesUpdateManyWithoutUsersNestedInput } from "../inputs/MessagesUpdateManyWithoutUsersNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProjectsUpdateManyWithoutUsersNestedInput } from "../inputs/ProjectsUpdateManyWithoutUsersNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { WorkspacesUpdateManyWithoutUsers_usersToworkspacesNestedInput } from "../inputs/WorkspacesUpdateManyWithoutUsers_usersToworkspacesNestedInput";

@TypeGraphQL.InputType("UsersUpdateWithoutMediamanagerInput", {
  isAbstract: true
})
export class UsersUpdateWithoutMediamanagerInput {
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

  @TypeGraphQL.Field(_type => MessagesUpdateManyWithoutUsersNestedInput, {
    nullable: true
  })
  messages?: MessagesUpdateManyWithoutUsersNestedInput | undefined;

  @TypeGraphQL.Field(_type => ProjectsUpdateManyWithoutUsersNestedInput, {
    nullable: true
  })
  projects?: ProjectsUpdateManyWithoutUsersNestedInput | undefined;

  @TypeGraphQL.Field(_type => WorkspacesUpdateManyWithoutUsers_usersToworkspacesNestedInput, {
    nullable: true
  })
  workspaces?: WorkspacesUpdateManyWithoutUsers_usersToworkspacesNestedInput | undefined;
}
