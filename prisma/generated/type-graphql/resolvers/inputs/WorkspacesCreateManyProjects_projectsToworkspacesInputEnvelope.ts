import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesCreateManyProjects_projectsToworkspacesInput } from "../inputs/WorkspacesCreateManyProjects_projectsToworkspacesInput";

@TypeGraphQL.InputType("WorkspacesCreateManyProjects_projectsToworkspacesInputEnvelope", {
  isAbstract: true
})
export class WorkspacesCreateManyProjects_projectsToworkspacesInputEnvelope {
  @TypeGraphQL.Field(_type => [WorkspacesCreateManyProjects_projectsToworkspacesInput], {
    nullable: false
  })
  data!: WorkspacesCreateManyProjects_projectsToworkspacesInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
