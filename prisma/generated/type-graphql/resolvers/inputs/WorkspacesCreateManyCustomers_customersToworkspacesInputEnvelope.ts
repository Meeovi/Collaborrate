import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesCreateManyCustomers_customersToworkspacesInput } from "../inputs/WorkspacesCreateManyCustomers_customersToworkspacesInput";

@TypeGraphQL.InputType("WorkspacesCreateManyCustomers_customersToworkspacesInputEnvelope", {
  isAbstract: true
})
export class WorkspacesCreateManyCustomers_customersToworkspacesInputEnvelope {
  @TypeGraphQL.Field(_type => [WorkspacesCreateManyCustomers_customersToworkspacesInput], {
    nullable: false
  })
  data!: WorkspacesCreateManyCustomers_customersToworkspacesInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
