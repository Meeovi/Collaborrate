import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriesCreateWithoutWorkspacesInput } from "../inputs/CategoriesCreateWithoutWorkspacesInput";
import { CategoriesUpdateWithoutWorkspacesInput } from "../inputs/CategoriesUpdateWithoutWorkspacesInput";

@TypeGraphQL.InputType("CategoriesUpsertWithoutWorkspacesInput", {
  isAbstract: true
})
export class CategoriesUpsertWithoutWorkspacesInput {
  @TypeGraphQL.Field(_type => CategoriesUpdateWithoutWorkspacesInput, {
    nullable: false
  })
  update!: CategoriesUpdateWithoutWorkspacesInput;

  @TypeGraphQL.Field(_type => CategoriesCreateWithoutWorkspacesInput, {
    nullable: false
  })
  create!: CategoriesCreateWithoutWorkspacesInput;
}
