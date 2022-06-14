import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesCreateManyProducts_productsToworkspacesInputEnvelope } from "../inputs/WorkspacesCreateManyProducts_productsToworkspacesInputEnvelope";
import { WorkspacesCreateOrConnectWithoutProducts_productsToworkspacesInput } from "../inputs/WorkspacesCreateOrConnectWithoutProducts_productsToworkspacesInput";
import { WorkspacesCreateWithoutProducts_productsToworkspacesInput } from "../inputs/WorkspacesCreateWithoutProducts_productsToworkspacesInput";
import { WorkspacesWhereUniqueInput } from "../inputs/WorkspacesWhereUniqueInput";

@TypeGraphQL.InputType("WorkspacesCreateNestedManyWithoutProducts_productsToworkspacesInput", {
  isAbstract: true
})
export class WorkspacesCreateNestedManyWithoutProducts_productsToworkspacesInput {
  @TypeGraphQL.Field(_type => [WorkspacesCreateWithoutProducts_productsToworkspacesInput], {
    nullable: true
  })
  create?: WorkspacesCreateWithoutProducts_productsToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesCreateOrConnectWithoutProducts_productsToworkspacesInput], {
    nullable: true
  })
  connectOrCreate?: WorkspacesCreateOrConnectWithoutProducts_productsToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => WorkspacesCreateManyProducts_productsToworkspacesInputEnvelope, {
    nullable: true
  })
  createMany?: WorkspacesCreateManyProducts_productsToworkspacesInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesWhereUniqueInput], {
    nullable: true
  })
  connect?: WorkspacesWhereUniqueInput[] | undefined;
}
