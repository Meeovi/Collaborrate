import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesCreateManyBrands_brandsToworkspacesInput } from "../inputs/WorkspacesCreateManyBrands_brandsToworkspacesInput";

@TypeGraphQL.InputType("WorkspacesCreateManyBrands_brandsToworkspacesInputEnvelope", {
  isAbstract: true
})
export class WorkspacesCreateManyBrands_brandsToworkspacesInputEnvelope {
  @TypeGraphQL.Field(_type => [WorkspacesCreateManyBrands_brandsToworkspacesInput], {
    nullable: false
  })
  data!: WorkspacesCreateManyBrands_brandsToworkspacesInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
