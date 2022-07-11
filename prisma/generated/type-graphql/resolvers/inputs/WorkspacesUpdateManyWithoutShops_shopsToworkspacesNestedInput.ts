import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesCreateManyShops_shopsToworkspacesInputEnvelope } from "../inputs/WorkspacesCreateManyShops_shopsToworkspacesInputEnvelope";
import { WorkspacesCreateOrConnectWithoutShops_shopsToworkspacesInput } from "../inputs/WorkspacesCreateOrConnectWithoutShops_shopsToworkspacesInput";
import { WorkspacesCreateWithoutShops_shopsToworkspacesInput } from "../inputs/WorkspacesCreateWithoutShops_shopsToworkspacesInput";
import { WorkspacesScalarWhereInput } from "../inputs/WorkspacesScalarWhereInput";
import { WorkspacesUpdateManyWithWhereWithoutShops_shopsToworkspacesInput } from "../inputs/WorkspacesUpdateManyWithWhereWithoutShops_shopsToworkspacesInput";
import { WorkspacesUpdateWithWhereUniqueWithoutShops_shopsToworkspacesInput } from "../inputs/WorkspacesUpdateWithWhereUniqueWithoutShops_shopsToworkspacesInput";
import { WorkspacesUpsertWithWhereUniqueWithoutShops_shopsToworkspacesInput } from "../inputs/WorkspacesUpsertWithWhereUniqueWithoutShops_shopsToworkspacesInput";
import { WorkspacesWhereUniqueInput } from "../inputs/WorkspacesWhereUniqueInput";

@TypeGraphQL.InputType("WorkspacesUpdateManyWithoutShops_shopsToworkspacesNestedInput", {
  isAbstract: true
})
export class WorkspacesUpdateManyWithoutShops_shopsToworkspacesNestedInput {
  @TypeGraphQL.Field(_type => [WorkspacesCreateWithoutShops_shopsToworkspacesInput], {
    nullable: true
  })
  create?: WorkspacesCreateWithoutShops_shopsToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesCreateOrConnectWithoutShops_shopsToworkspacesInput], {
    nullable: true
  })
  connectOrCreate?: WorkspacesCreateOrConnectWithoutShops_shopsToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesUpsertWithWhereUniqueWithoutShops_shopsToworkspacesInput], {
    nullable: true
  })
  upsert?: WorkspacesUpsertWithWhereUniqueWithoutShops_shopsToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => WorkspacesCreateManyShops_shopsToworkspacesInputEnvelope, {
    nullable: true
  })
  createMany?: WorkspacesCreateManyShops_shopsToworkspacesInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [WorkspacesUpdateWithWhereUniqueWithoutShops_shopsToworkspacesInput], {
    nullable: true
  })
  update?: WorkspacesUpdateWithWhereUniqueWithoutShops_shopsToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesUpdateManyWithWhereWithoutShops_shopsToworkspacesInput], {
    nullable: true
  })
  updateMany?: WorkspacesUpdateManyWithWhereWithoutShops_shopsToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: WorkspacesScalarWhereInput[] | undefined;
}
