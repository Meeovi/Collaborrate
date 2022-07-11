import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesCreateWithoutProducts_productsToworkspacesInput } from "../inputs/WorkspacesCreateWithoutProducts_productsToworkspacesInput";
import { WorkspacesWhereUniqueInput } from "../inputs/WorkspacesWhereUniqueInput";

@TypeGraphQL.InputType("WorkspacesCreateOrConnectWithoutProducts_productsToworkspacesInput", {
  isAbstract: true
})
export class WorkspacesCreateOrConnectWithoutProducts_productsToworkspacesInput {
  @TypeGraphQL.Field(_type => WorkspacesWhereUniqueInput, {
    nullable: false
  })
  where!: WorkspacesWhereUniqueInput;

  @TypeGraphQL.Field(_type => WorkspacesCreateWithoutProducts_productsToworkspacesInput, {
    nullable: false
  })
  create!: WorkspacesCreateWithoutProducts_productsToworkspacesInput;
}