import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesCreateManyProducts_productsToworkspacesInputEnvelope } from "../inputs/WorkspacesCreateManyProducts_productsToworkspacesInputEnvelope";
import { WorkspacesCreateOrConnectWithoutProducts_productsToworkspacesInput } from "../inputs/WorkspacesCreateOrConnectWithoutProducts_productsToworkspacesInput";
import { WorkspacesCreateWithoutProducts_productsToworkspacesInput } from "../inputs/WorkspacesCreateWithoutProducts_productsToworkspacesInput";
import { WorkspacesScalarWhereInput } from "../inputs/WorkspacesScalarWhereInput";
import { WorkspacesUpdateManyWithWhereWithoutProducts_productsToworkspacesInput } from "../inputs/WorkspacesUpdateManyWithWhereWithoutProducts_productsToworkspacesInput";
import { WorkspacesUpdateWithWhereUniqueWithoutProducts_productsToworkspacesInput } from "../inputs/WorkspacesUpdateWithWhereUniqueWithoutProducts_productsToworkspacesInput";
import { WorkspacesUpsertWithWhereUniqueWithoutProducts_productsToworkspacesInput } from "../inputs/WorkspacesUpsertWithWhereUniqueWithoutProducts_productsToworkspacesInput";
import { WorkspacesWhereUniqueInput } from "../inputs/WorkspacesWhereUniqueInput";

@TypeGraphQL.InputType("WorkspacesUpdateManyWithoutProducts_productsToworkspacesInput", {
  isAbstract: true
})
export class WorkspacesUpdateManyWithoutProducts_productsToworkspacesInput {
  @TypeGraphQL.Field(_type => [WorkspacesCreateWithoutProducts_productsToworkspacesInput], {
    nullable: true
  })
  create?: WorkspacesCreateWithoutProducts_productsToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesCreateOrConnectWithoutProducts_productsToworkspacesInput], {
    nullable: true
  })
  connectOrCreate?: WorkspacesCreateOrConnectWithoutProducts_productsToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesUpsertWithWhereUniqueWithoutProducts_productsToworkspacesInput], {
    nullable: true
  })
  upsert?: WorkspacesUpsertWithWhereUniqueWithoutProducts_productsToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => WorkspacesCreateManyProducts_productsToworkspacesInputEnvelope, {
    nullable: true
  })
  createMany?: WorkspacesCreateManyProducts_productsToworkspacesInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [WorkspacesUpdateWithWhereUniqueWithoutProducts_productsToworkspacesInput], {
    nullable: true
  })
  update?: WorkspacesUpdateWithWhereUniqueWithoutProducts_productsToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesUpdateManyWithWhereWithoutProducts_productsToworkspacesInput], {
    nullable: true
  })
  updateMany?: WorkspacesUpdateManyWithWhereWithoutProducts_productsToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: WorkspacesScalarWhereInput[] | undefined;
}
