import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesScalarWhereInput } from "../inputs/WorkspacesScalarWhereInput";
import { WorkspacesUpdateManyMutationInput } from "../inputs/WorkspacesUpdateManyMutationInput";

@TypeGraphQL.InputType("WorkspacesUpdateManyWithWhereWithoutBrands_brandsToworkspacesInput", {
  isAbstract: true
})
export class WorkspacesUpdateManyWithWhereWithoutBrands_brandsToworkspacesInput {
  @TypeGraphQL.Field(_type => WorkspacesScalarWhereInput, {
    nullable: false
  })
  where!: WorkspacesScalarWhereInput;

  @TypeGraphQL.Field(_type => WorkspacesUpdateManyMutationInput, {
    nullable: false
  })
  data!: WorkspacesUpdateManyMutationInput;
}
