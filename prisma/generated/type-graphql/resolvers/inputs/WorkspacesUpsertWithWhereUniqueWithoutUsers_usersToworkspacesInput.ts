import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesCreateWithoutUsers_usersToworkspacesInput } from "../inputs/WorkspacesCreateWithoutUsers_usersToworkspacesInput";
import { WorkspacesUpdateWithoutUsers_usersToworkspacesInput } from "../inputs/WorkspacesUpdateWithoutUsers_usersToworkspacesInput";
import { WorkspacesWhereUniqueInput } from "../inputs/WorkspacesWhereUniqueInput";

@TypeGraphQL.InputType("WorkspacesUpsertWithWhereUniqueWithoutUsers_usersToworkspacesInput", {
  isAbstract: true
})
export class WorkspacesUpsertWithWhereUniqueWithoutUsers_usersToworkspacesInput {
  @TypeGraphQL.Field(_type => WorkspacesWhereUniqueInput, {
    nullable: false
  })
  where!: WorkspacesWhereUniqueInput;

  @TypeGraphQL.Field(_type => WorkspacesUpdateWithoutUsers_usersToworkspacesInput, {
    nullable: false
  })
  update!: WorkspacesUpdateWithoutUsers_usersToworkspacesInput;

  @TypeGraphQL.Field(_type => WorkspacesCreateWithoutUsers_usersToworkspacesInput, {
    nullable: false
  })
  create!: WorkspacesCreateWithoutUsers_usersToworkspacesInput;
}
