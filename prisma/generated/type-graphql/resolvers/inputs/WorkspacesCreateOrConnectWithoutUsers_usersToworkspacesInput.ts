import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesCreateWithoutUsers_usersToworkspacesInput } from "../inputs/WorkspacesCreateWithoutUsers_usersToworkspacesInput";
import { WorkspacesWhereUniqueInput } from "../inputs/WorkspacesWhereUniqueInput";

@TypeGraphQL.InputType("WorkspacesCreateOrConnectWithoutUsers_usersToworkspacesInput", {
  isAbstract: true
})
export class WorkspacesCreateOrConnectWithoutUsers_usersToworkspacesInput {
  @TypeGraphQL.Field(_type => WorkspacesWhereUniqueInput, {
    nullable: false
  })
  where!: WorkspacesWhereUniqueInput;

  @TypeGraphQL.Field(_type => WorkspacesCreateWithoutUsers_usersToworkspacesInput, {
    nullable: false
  })
  create!: WorkspacesCreateWithoutUsers_usersToworkspacesInput;
}
