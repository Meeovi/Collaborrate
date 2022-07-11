import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesUpdateWithoutShops_shopsToworkspacesInput } from "../inputs/WorkspacesUpdateWithoutShops_shopsToworkspacesInput";
import { WorkspacesWhereUniqueInput } from "../inputs/WorkspacesWhereUniqueInput";

@TypeGraphQL.InputType("WorkspacesUpdateWithWhereUniqueWithoutShops_shopsToworkspacesInput", {
  isAbstract: true
})
export class WorkspacesUpdateWithWhereUniqueWithoutShops_shopsToworkspacesInput {
  @TypeGraphQL.Field(_type => WorkspacesWhereUniqueInput, {
    nullable: false
  })
  where!: WorkspacesWhereUniqueInput;

  @TypeGraphQL.Field(_type => WorkspacesUpdateWithoutShops_shopsToworkspacesInput, {
    nullable: false
  })
  data!: WorkspacesUpdateWithoutShops_shopsToworkspacesInput;
}
