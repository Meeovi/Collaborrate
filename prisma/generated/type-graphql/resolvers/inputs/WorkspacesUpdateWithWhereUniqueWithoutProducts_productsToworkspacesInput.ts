import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesUpdateWithoutProducts_productsToworkspacesInput } from "../inputs/WorkspacesUpdateWithoutProducts_productsToworkspacesInput";
import { WorkspacesWhereUniqueInput } from "../inputs/WorkspacesWhereUniqueInput";

@TypeGraphQL.InputType("WorkspacesUpdateWithWhereUniqueWithoutProducts_productsToworkspacesInput", {
  isAbstract: true
})
export class WorkspacesUpdateWithWhereUniqueWithoutProducts_productsToworkspacesInput {
  @TypeGraphQL.Field(_type => WorkspacesWhereUniqueInput, {
    nullable: false
  })
  where!: WorkspacesWhereUniqueInput;

  @TypeGraphQL.Field(_type => WorkspacesUpdateWithoutProducts_productsToworkspacesInput, {
    nullable: false
  })
  data!: WorkspacesUpdateWithoutProducts_productsToworkspacesInput;
}
