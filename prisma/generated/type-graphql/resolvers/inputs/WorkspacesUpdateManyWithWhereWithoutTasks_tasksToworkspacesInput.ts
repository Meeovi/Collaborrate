import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesScalarWhereInput } from "../inputs/WorkspacesScalarWhereInput";
import { WorkspacesUpdateManyMutationInput } from "../inputs/WorkspacesUpdateManyMutationInput";

@TypeGraphQL.InputType("WorkspacesUpdateManyWithWhereWithoutTasks_tasksToworkspacesInput", {
  isAbstract: true
})
export class WorkspacesUpdateManyWithWhereWithoutTasks_tasksToworkspacesInput {
  @TypeGraphQL.Field(_type => WorkspacesScalarWhereInput, {
    nullable: false
  })
  where!: WorkspacesScalarWhereInput;

  @TypeGraphQL.Field(_type => WorkspacesUpdateManyMutationInput, {
    nullable: false
  })
  data!: WorkspacesUpdateManyMutationInput;
}
