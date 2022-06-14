import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesCreateManyShops_shopsToworkspacesInput } from "../inputs/WorkspacesCreateManyShops_shopsToworkspacesInput";

@TypeGraphQL.InputType("WorkspacesCreateManyShops_shopsToworkspacesInputEnvelope", {
  isAbstract: true
})
export class WorkspacesCreateManyShops_shopsToworkspacesInputEnvelope {
  @TypeGraphQL.Field(_type => [WorkspacesCreateManyShops_shopsToworkspacesInput], {
    nullable: false
  })
  data!: WorkspacesCreateManyShops_shopsToworkspacesInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
