import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesCreateManyCustomers_customersToworkspacesInputEnvelope } from "../inputs/WorkspacesCreateManyCustomers_customersToworkspacesInputEnvelope";
import { WorkspacesCreateOrConnectWithoutCustomers_customersToworkspacesInput } from "../inputs/WorkspacesCreateOrConnectWithoutCustomers_customersToworkspacesInput";
import { WorkspacesCreateWithoutCustomers_customersToworkspacesInput } from "../inputs/WorkspacesCreateWithoutCustomers_customersToworkspacesInput";
import { WorkspacesWhereUniqueInput } from "../inputs/WorkspacesWhereUniqueInput";

@TypeGraphQL.InputType("WorkspacesCreateNestedManyWithoutCustomers_customersToworkspacesInput", {
  isAbstract: true
})
export class WorkspacesCreateNestedManyWithoutCustomers_customersToworkspacesInput {
  @TypeGraphQL.Field(_type => [WorkspacesCreateWithoutCustomers_customersToworkspacesInput], {
    nullable: true
  })
  create?: WorkspacesCreateWithoutCustomers_customersToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesCreateOrConnectWithoutCustomers_customersToworkspacesInput], {
    nullable: true
  })
  connectOrCreate?: WorkspacesCreateOrConnectWithoutCustomers_customersToworkspacesInput[] | undefined;

  @TypeGraphQL.Field(_type => WorkspacesCreateManyCustomers_customersToworkspacesInputEnvelope, {
    nullable: true
  })
  createMany?: WorkspacesCreateManyCustomers_customersToworkspacesInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesWhereUniqueInput], {
    nullable: true
  })
  connect?: WorkspacesWhereUniqueInput[] | undefined;
}
