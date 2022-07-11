import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesScalarWhereInput } from "../inputs/WorkspacesScalarWhereInput";
import { WorkspacesUpdateManyMutationInput } from "../inputs/WorkspacesUpdateManyMutationInput";

@TypeGraphQL.InputType("WorkspacesUpdateManyWithWhereWithoutCustomers_customersToworkspacesInput", {
  isAbstract: true
})
export class WorkspacesUpdateManyWithWhereWithoutCustomers_customersToworkspacesInput {
  @TypeGraphQL.Field(_type => WorkspacesScalarWhereInput, {
    nullable: false
  })
  where!: WorkspacesScalarWhereInput;

  @TypeGraphQL.Field(_type => WorkspacesUpdateManyMutationInput, {
    nullable: false
  })
  data!: WorkspacesUpdateManyMutationInput;
}
