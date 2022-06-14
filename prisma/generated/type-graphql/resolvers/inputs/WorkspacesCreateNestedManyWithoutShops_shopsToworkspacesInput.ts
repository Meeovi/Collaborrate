import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesCreateManyShops_shopsToworkspacesInputEnvelope } from "../inputs/WorkspacesCreateManyShops_shopsToworkspacesInputEnvelope";
import { WorkspacesCreateOrConnectWithoutShops_shopsToworkspacesInput } from "../inputs/WorkspacesCreateOrConnectWithoutShops_shopsToworkspacesInput";
import { WorkspacesCreateWithoutShops_shopsToworkspacesInput } from "../inputs/WorkspacesCreateWithoutShops_shopsToworkspacesInput";
import { WorkspacesWhereUniqueInput } from "../inputs/WorkspacesWhereUniqueInput";

@TypeGraphQL.InputType("WorkspacesCreateNestedManyWithoutShops_shopsToworkspacesInput", {
  isAbstract: true
})
export class WorkspacesCreateNestedManyWithoutShops_shopsToworkspacesInput {
  @TypeGraphQL.Field(_type => [WorkspacesCreateWithoutShops_shopsToworkspacesInput], {
    nullable: true
  })
  create?: WorkspacesCreateWithoutShops_shopsToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesCreateOrConnectWithoutShops_shopsToworkspacesInput], {
    nullable: true
  })
  connectOrCreate?: WorkspacesCreateOrConnectWithoutShops_shopsToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => WorkspacesCreateManyShops_shopsToworkspacesInputEnvelope, {
    nullable: true
  })
  createMany?: WorkspacesCreateManyShops_shopsToworkspacesInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesWhereUniqueInput], {
    nullable: true
  })
  connect?: WorkspacesWhereUniqueInput[] | undefined;
}
