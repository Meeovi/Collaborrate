import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmailsCreateNestedManyWithoutUsersInput } from "../inputs/EmailsCreateNestedManyWithoutUsersInput";
import { MediamanagerCreateNestedManyWithoutUsersInput } from "../inputs/MediamanagerCreateNestedManyWithoutUsersInput";
import { MessagesCreateNestedManyWithoutUsersInput } from "../inputs/MessagesCreateNestedManyWithoutUsersInput";
import { ProjectsCreateNestedManyWithoutUsersInput } from "../inputs/ProjectsCreateNestedManyWithoutUsersInput";
import { WorkspacesCreateNestedManyWithoutUsers_usersToworkspacesInput } from "../inputs/WorkspacesCreateNestedManyWithoutUsers_usersToworkspacesInput";

@TypeGraphQL.InputType("UsersCreateInput", {
  isAbstract: true
})
export class UsersCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  first_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  last_name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  interface_locale?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  value?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  permissions?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => EmailsCreateNestedManyWithoutUsersInput, {
    nullable: true
  })
  emails?: EmailsCreateNestedManyWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => MediamanagerCreateNestedManyWithoutUsersInput, {
    nullable: true
  })
  mediamanager?: MediamanagerCreateNestedManyWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => MessagesCreateNestedManyWithoutUsersInput, {
    nullable: true
  })
  messages?: MessagesCreateNestedManyWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => ProjectsCreateNestedManyWithoutUsersInput, {
    nullable: true
  })
  projects?: ProjectsCreateNestedManyWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => WorkspacesCreateNestedManyWithoutUsers_usersToworkspacesInput, {
    nullable: true
  })
  workspaces?: WorkspacesCreateNestedManyWithoutUsers_usersToworkspacesInput | undefined;
}
