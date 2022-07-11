import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesCreateManyTasks_tasksToworkspacesInput } from "../inputs/WorkspacesCreateManyTasks_tasksToworkspacesInput";

@TypeGraphQL.InputType("WorkspacesCreateManyTasks_tasksToworkspacesInputEnvelope", {
  isAbstract: true
})
export class WorkspacesCreateManyTasks_tasksToworkspacesInputEnvelope {
  @TypeGraphQL.Field(_type => [WorkspacesCreateManyTasks_tasksToworkspacesInput], {
    nullable: false
  })
  data!: WorkspacesCreateManyTasks_tasksToworkspacesInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
