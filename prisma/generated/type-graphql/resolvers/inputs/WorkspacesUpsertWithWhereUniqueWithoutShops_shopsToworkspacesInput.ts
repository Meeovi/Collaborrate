import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesCreateWithoutShops_shopsToworkspacesInput } from "../inputs/WorkspacesCreateWithoutShops_shopsToworkspacesInput";
import { WorkspacesUpdateWithoutShops_shopsToworkspacesInput } from "../inputs/WorkspacesUpdateWithoutShops_shopsToworkspacesInput";
import { WorkspacesWhereUniqueInput } from "../inputs/WorkspacesWhereUniqueInput";

@TypeGraphQL.InputType("WorkspacesUpsertWithWhereUniqueWithoutShops_shopsToworkspacesInput", {
  isAbstract: true
})
export class WorkspacesUpsertWithWhereUniqueWithoutShops_shopsToworkspacesInput {
  @TypeGraphQL.Field(_type => WorkspacesWhereUniqueInput, {
    nullable: false
  })
  where!: WorkspacesWhereUniqueInput;

  @TypeGraphQL.Field(_type => WorkspacesUpdateWithoutShops_shopsToworkspacesInput, {
    nullable: false
  })
  update!: WorkspacesUpdateWithoutShops_shopsToworkspacesInput;

  @TypeGraphQL.Field(_type => WorkspacesCreateWithoutShops_shopsToworkspacesInput, {
    nullable: false
  })
  create!: WorkspacesCreateWithoutShops_shopsToworkspacesInput;
}
