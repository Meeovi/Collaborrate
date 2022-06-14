import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesCreateWithoutBrands_brandsToworkspacesInput } from "../inputs/WorkspacesCreateWithoutBrands_brandsToworkspacesInput";
import { WorkspacesWhereUniqueInput } from "../inputs/WorkspacesWhereUniqueInput";

@TypeGraphQL.InputType("WorkspacesCreateOrConnectWithoutBrands_brandsToworkspacesInput", {
  isAbstract: true
})
export class WorkspacesCreateOrConnectWithoutBrands_brandsToworkspacesInput {
  @TypeGraphQL.Field(_type => WorkspacesWhereUniqueInput, {
    nullable: false
  })
  where!: WorkspacesWhereUniqueInput;

  @TypeGraphQL.Field(_type => WorkspacesCreateWithoutBrands_brandsToworkspacesInput, {
    nullable: false
  })
  create!: WorkspacesCreateWithoutBrands_brandsToworkspacesInput;
}
