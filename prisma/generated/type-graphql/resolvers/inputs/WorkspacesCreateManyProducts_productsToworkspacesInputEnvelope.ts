import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesCreateManyProducts_productsToworkspacesInput } from "../inputs/WorkspacesCreateManyProducts_productsToworkspacesInput";

@TypeGraphQL.InputType("WorkspacesCreateManyProducts_productsToworkspacesInputEnvelope", {
  isAbstract: true
})
export class WorkspacesCreateManyProducts_productsToworkspacesInputEnvelope {
  @TypeGraphQL.Field(_type => [WorkspacesCreateManyProducts_productsToworkspacesInput], {
    nullable: false
  })
  data!: WorkspacesCreateManyProducts_productsToworkspacesInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
