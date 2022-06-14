import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesCreateManyCustomers_customersToworkspacesInputEnvelope } from "../inputs/WorkspacesCreateManyCustomers_customersToworkspacesInputEnvelope";
import { WorkspacesCreateOrConnectWithoutCustomers_customersToworkspacesInput } from "../inputs/WorkspacesCreateOrConnectWithoutCustomers_customersToworkspacesInput";
import { WorkspacesCreateWithoutCustomers_customersToworkspacesInput } from "../inputs/WorkspacesCreateWithoutCustomers_customersToworkspacesInput";
import { WorkspacesScalarWhereInput } from "../inputs/WorkspacesScalarWhereInput";
import { WorkspacesUpdateManyWithWhereWithoutCustomers_customersToworkspacesInput } from "../inputs/WorkspacesUpdateManyWithWhereWithoutCustomers_customersToworkspacesInput";
import { WorkspacesUpdateWithWhereUniqueWithoutCustomers_customersToworkspacesInput } from "../inputs/WorkspacesUpdateWithWhereUniqueWithoutCustomers_customersToworkspacesInput";
import { WorkspacesUpsertWithWhereUniqueWithoutCustomers_customersToworkspacesInput } from "../inputs/WorkspacesUpsertWithWhereUniqueWithoutCustomers_customersToworkspacesInput";
import { WorkspacesWhereUniqueInput } from "../inputs/WorkspacesWhereUniqueInput";

@TypeGraphQL.InputType("WorkspacesUpdateManyWithoutCustomers_customersToworkspacesInput", {
  isAbstract: true
})
export class WorkspacesUpdateManyWithoutCustomers_customersToworkspacesInput {
  @TypeGraphQL.Field(_type => [WorkspacesCreateWithoutCustomers_customersToworkspacesInput], {
    nullable: true
  })
  create?: WorkspacesCreateWithoutCustomers_customersToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesCreateOrConnectWithoutCustomers_customersToworkspacesInput], {
    nullable: true
  })
  connectOrCreate?: WorkspacesCreateOrConnectWithoutCustomers_customersToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesUpsertWithWhereUniqueWithoutCustomers_customersToworkspacesInput], {
    nullable: true
  })
  upsert?: WorkspacesUpsertWithWhereUniqueWithoutCustomers_customersToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => WorkspacesCreateManyCustomers_customersToworkspacesInputEnvelope, {
    nullable: true
  })
  createMany?: WorkspacesCreateManyCustomers_customersToworkspacesInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [WorkspacesUpdateWithWhereUniqueWithoutCustomers_customersToworkspacesInput], {
    nullable: true
  })
  update?: WorkspacesUpdateWithWhereUniqueWithoutCustomers_customersToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesUpdateManyWithWhereWithoutCustomers_customersToworkspacesInput], {
    nullable: true
  })
  updateMany?: WorkspacesUpdateManyWithWhereWithoutCustomers_customersToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: WorkspacesScalarWhereInput[] | undefined;
}
