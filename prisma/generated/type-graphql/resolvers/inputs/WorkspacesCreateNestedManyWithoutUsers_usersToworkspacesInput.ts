import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesCreateManyUsers_usersToworkspacesInputEnvelope } from "../inputs/WorkspacesCreateManyUsers_usersToworkspacesInputEnvelope";
import { WorkspacesCreateOrConnectWithoutUsers_usersToworkspacesInput } from "../inputs/WorkspacesCreateOrConnectWithoutUsers_usersToworkspacesInput";
import { WorkspacesCreateWithoutUsers_usersToworkspacesInput } from "../inputs/WorkspacesCreateWithoutUsers_usersToworkspacesInput";
import { WorkspacesWhereUniqueInput } from "../inputs/WorkspacesWhereUniqueInput";

@TypeGraphQL.InputType("WorkspacesCreateNestedManyWithoutUsers_usersToworkspacesInput", {
  isAbstract: true
})
export class WorkspacesCreateNestedManyWithoutUsers_usersToworkspacesInput {
  @TypeGraphQL.Field(_type => [WorkspacesCreateWithoutUsers_usersToworkspacesInput], {
    nullable: true
  })
  create?: WorkspacesCreateWithoutUsers_usersToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesCreateOrConnectWithoutUsers_usersToworkspacesInput], {
    nullable: true
  })
  connectOrCreate?: WorkspacesCreateOrConnectWithoutUsers_usersToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => WorkspacesCreateManyUsers_usersToworkspacesInputEnvelope, {
    nullable: true
  })
  createMany?: WorkspacesCreateManyUsers_usersToworkspacesInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesWhereUniqueInput], {
    nullable: true
  })
  connect?: WorkspacesWhereUniqueInput[] | undefined;
}
