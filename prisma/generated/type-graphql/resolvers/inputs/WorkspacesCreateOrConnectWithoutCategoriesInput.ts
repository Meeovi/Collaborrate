import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesCreateWithoutCategoriesInput } from "../inputs/WorkspacesCreateWithoutCategoriesInput";
import { WorkspacesWhereUniqueInput } from "../inputs/WorkspacesWhereUniqueInput";

@TypeGraphQL.InputType("WorkspacesCreateOrConnectWithoutCategoriesInput", {
  isAbstract: true
})
export class WorkspacesCreateOrConnectWithoutCategoriesInput {
  @TypeGraphQL.Field(_type => WorkspacesWhereUniqueInput, {
    nullable: false
  })
  where!: WorkspacesWhereUniqueInput;

  @TypeGraphQL.Field(_type => WorkspacesCreateWithoutCategoriesInput, {
    nullable: false
  })
  create!: WorkspacesCreateWithoutCategoriesInput;
}
