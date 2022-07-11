import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesCreateManyUsers_usersToworkspacesInput } from "../inputs/WorkspacesCreateManyUsers_usersToworkspacesInput";

@TypeGraphQL.InputType("WorkspacesCreateManyUsers_usersToworkspacesInputEnvelope", {
  isAbstract: true
})
export class WorkspacesCreateManyUsers_usersToworkspacesInputEnvelope {
  @TypeGraphQL.Field(_type => [WorkspacesCreateManyUsers_usersToworkspacesInput], {
    nullable: false
  })
  data!: WorkspacesCreateManyUsers_usersToworkspacesInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
