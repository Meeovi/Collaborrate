import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesUpdateWithoutUsers_usersToworkspacesInput } from "../inputs/WorkspacesUpdateWithoutUsers_usersToworkspacesInput";
import { WorkspacesWhereUniqueInput } from "../inputs/WorkspacesWhereUniqueInput";

@TypeGraphQL.InputType("WorkspacesUpdateWithWhereUniqueWithoutUsers_usersToworkspacesInput", {
  isAbstract: true
})
export class WorkspacesUpdateWithWhereUniqueWithoutUsers_usersToworkspacesInput {
  @TypeGraphQL.Field(_type => WorkspacesWhereUniqueInput, {
    nullable: false
  })
  where!: WorkspacesWhereUniqueInput;

  @TypeGraphQL.Field(_type => WorkspacesUpdateWithoutUsers_usersToworkspacesInput, {
    nullable: false
  })
  data!: WorkspacesUpdateWithoutUsers_usersToworkspacesInput;
}
