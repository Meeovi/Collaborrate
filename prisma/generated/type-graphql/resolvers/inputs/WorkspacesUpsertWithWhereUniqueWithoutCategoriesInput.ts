import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesCreateWithoutCategoriesInput } from "../inputs/WorkspacesCreateWithoutCategoriesInput";
import { WorkspacesUpdateWithoutCategoriesInput } from "../inputs/WorkspacesUpdateWithoutCategoriesInput";
import { WorkspacesWhereUniqueInput } from "../inputs/WorkspacesWhereUniqueInput";

@TypeGraphQL.InputType("WorkspacesUpsertWithWhereUniqueWithoutCategoriesInput", {
  isAbstract: true
})
export class WorkspacesUpsertWithWhereUniqueWithoutCategoriesInput {
  @TypeGraphQL.Field(_type => WorkspacesWhereUniqueInput, {
    nullable: false
  })
  where!: WorkspacesWhereUniqueInput;

  @TypeGraphQL.Field(_type => WorkspacesUpdateWithoutCategoriesInput, {
    nullable: false
  })
  update!: WorkspacesUpdateWithoutCategoriesInput;

  @TypeGraphQL.Field(_type => WorkspacesCreateWithoutCategoriesInput, {
    nullable: false
  })
  create!: WorkspacesCreateWithoutCategoriesInput;
}
