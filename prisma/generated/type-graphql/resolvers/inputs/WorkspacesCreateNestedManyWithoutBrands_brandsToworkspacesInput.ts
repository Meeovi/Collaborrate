import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesCreateManyBrands_brandsToworkspacesInputEnvelope } from "../inputs/WorkspacesCreateManyBrands_brandsToworkspacesInputEnvelope";
import { WorkspacesCreateOrConnectWithoutBrands_brandsToworkspacesInput } from "../inputs/WorkspacesCreateOrConnectWithoutBrands_brandsToworkspacesInput";
import { WorkspacesCreateWithoutBrands_brandsToworkspacesInput } from "../inputs/WorkspacesCreateWithoutBrands_brandsToworkspacesInput";
import { WorkspacesWhereUniqueInput } from "../inputs/WorkspacesWhereUniqueInput";

@TypeGraphQL.InputType("WorkspacesCreateNestedManyWithoutBrands_brandsToworkspacesInput", {
  isAbstract: true
})
export class WorkspacesCreateNestedManyWithoutBrands_brandsToworkspacesInput {
  @TypeGraphQL.Field(_type => [WorkspacesCreateWithoutBrands_brandsToworkspacesInput], {
    nullable: true
  })
  create?: WorkspacesCreateWithoutBrands_brandsToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesCreateOrConnectWithoutBrands_brandsToworkspacesInput], {
    nullable: true
  })
  connectOrCreate?: WorkspacesCreateOrConnectWithoutBrands_brandsToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => WorkspacesCreateManyBrands_brandsToworkspacesInputEnvelope, {
    nullable: true
  })
  createMany?: WorkspacesCreateManyBrands_brandsToworkspacesInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesWhereUniqueInput], {
    nullable: true
  })
  connect?: WorkspacesWhereUniqueInput[] | undefined;
}
