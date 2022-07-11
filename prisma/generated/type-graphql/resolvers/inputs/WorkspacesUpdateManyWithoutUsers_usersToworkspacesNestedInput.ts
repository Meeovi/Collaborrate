import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesCreateManyUsers_usersToworkspacesInputEnvelope } from "../inputs/WorkspacesCreateManyUsers_usersToworkspacesInputEnvelope";
import { WorkspacesCreateOrConnectWithoutUsers_usersToworkspacesInput } from "../inputs/WorkspacesCreateOrConnectWithoutUsers_usersToworkspacesInput";
import { WorkspacesCreateWithoutUsers_usersToworkspacesInput } from "../inputs/WorkspacesCreateWithoutUsers_usersToworkspacesInput";
import { WorkspacesScalarWhereInput } from "../inputs/WorkspacesScalarWhereInput";
import { WorkspacesUpdateManyWithWhereWithoutUsers_usersToworkspacesInput } from "../inputs/WorkspacesUpdateManyWithWhereWithoutUsers_usersToworkspacesInput";
import { WorkspacesUpdateWithWhereUniqueWithoutUsers_usersToworkspacesInput } from "../inputs/WorkspacesUpdateWithWhereUniqueWithoutUsers_usersToworkspacesInput";
import { WorkspacesUpsertWithWhereUniqueWithoutUsers_usersToworkspacesInput } from "../inputs/WorkspacesUpsertWithWhereUniqueWithoutUsers_usersToworkspacesInput";
import { WorkspacesWhereUniqueInput } from "../inputs/WorkspacesWhereUniqueInput";

@TypeGraphQL.InputType("WorkspacesUpdateManyWithoutUsers_usersToworkspacesNestedInput", {
  isAbstract: true
})
export class WorkspacesUpdateManyWithoutUsers_usersToworkspacesNestedInput {
  @TypeGraphQL.Field(_type => [WorkspacesCreateWithoutUsers_usersToworkspacesInput], {
    nullable: true
  })
  create?: WorkspacesCreateWithoutUsers_usersToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesCreateOrConnectWithoutUsers_usersToworkspacesInput], {
    nullable: true
  })
  connectOrCreate?: WorkspacesCreateOrConnectWithoutUsers_usersToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesUpsertWithWhereUniqueWithoutUsers_usersToworkspacesInput], {
    nullable: true
  })
  upsert?: WorkspacesUpsertWithWhereUniqueWithoutUsers_usersToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => WorkspacesCreateManyUsers_usersToworkspacesInputEnvelope, {
    nullable: true
  })
  createMany?: WorkspacesCreateManyUsers_usersToworkspacesInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesWhereUniqueInput], {
    nullable: true
  })
  set?: WorkspacesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: WorkspacesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesWhereUniqueInput], {
    nullable: true
  })
  delete?: WorkspacesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesWhereUniqueInput], {
    nullable: true
  })
  connect?: WorkspacesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesUpdateWithWhereUniqueWithoutUsers_usersToworkspacesInput], {
    nullable: true
  })
  update?: WorkspacesUpdateWithWhereUniqueWithoutUsers_usersToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesUpdateManyWithWhereWithoutUsers_usersToworkspacesInput], {
    nullable: true
  })
  updateMany?: WorkspacesUpdateManyWithWhereWithoutUsers_usersToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: WorkspacesScalarWhereInput[] | undefined;
}
