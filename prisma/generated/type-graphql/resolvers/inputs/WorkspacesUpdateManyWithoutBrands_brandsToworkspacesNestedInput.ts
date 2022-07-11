import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesCreateManyBrands_brandsToworkspacesInputEnvelope } from "../inputs/WorkspacesCreateManyBrands_brandsToworkspacesInputEnvelope";
import { WorkspacesCreateOrConnectWithoutBrands_brandsToworkspacesInput } from "../inputs/WorkspacesCreateOrConnectWithoutBrands_brandsToworkspacesInput";
import { WorkspacesCreateWithoutBrands_brandsToworkspacesInput } from "../inputs/WorkspacesCreateWithoutBrands_brandsToworkspacesInput";
import { WorkspacesScalarWhereInput } from "../inputs/WorkspacesScalarWhereInput";
import { WorkspacesUpdateManyWithWhereWithoutBrands_brandsToworkspacesInput } from "../inputs/WorkspacesUpdateManyWithWhereWithoutBrands_brandsToworkspacesInput";
import { WorkspacesUpdateWithWhereUniqueWithoutBrands_brandsToworkspacesInput } from "../inputs/WorkspacesUpdateWithWhereUniqueWithoutBrands_brandsToworkspacesInput";
import { WorkspacesUpsertWithWhereUniqueWithoutBrands_brandsToworkspacesInput } from "../inputs/WorkspacesUpsertWithWhereUniqueWithoutBrands_brandsToworkspacesInput";
import { WorkspacesWhereUniqueInput } from "../inputs/WorkspacesWhereUniqueInput";

@TypeGraphQL.InputType("WorkspacesUpdateManyWithoutBrands_brandsToworkspacesNestedInput", {
  isAbstract: true
})
export class WorkspacesUpdateManyWithoutBrands_brandsToworkspacesNestedInput {
  @TypeGraphQL.Field(_type => [WorkspacesCreateWithoutBrands_brandsToworkspacesInput], {
    nullable: true
  })
  create?: WorkspacesCreateWithoutBrands_brandsToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesCreateOrConnectWithoutBrands_brandsToworkspacesInput], {
    nullable: true
  })
  connectOrCreate?: WorkspacesCreateOrConnectWithoutBrands_brandsToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesUpsertWithWhereUniqueWithoutBrands_brandsToworkspacesInput], {
    nullable: true
  })
  upsert?: WorkspacesUpsertWithWhereUniqueWithoutBrands_brandsToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => WorkspacesCreateManyBrands_brandsToworkspacesInputEnvelope, {
    nullable: true
  })
  createMany?: WorkspacesCreateManyBrands_brandsToworkspacesInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [WorkspacesUpdateWithWhereUniqueWithoutBrands_brandsToworkspacesInput], {
    nullable: true
  })
  update?: WorkspacesUpdateWithWhereUniqueWithoutBrands_brandsToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesUpdateManyWithWhereWithoutBrands_brandsToworkspacesInput], {
    nullable: true
  })
  updateMany?: WorkspacesUpdateManyWithWhereWithoutBrands_brandsToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: WorkspacesScalarWhereInput[] | undefined;
}
