import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriesCreateWithoutWorkspacesInput } from "../inputs/CategoriesCreateWithoutWorkspacesInput";
import { CategoriesWhereUniqueInput } from "../inputs/CategoriesWhereUniqueInput";

@TypeGraphQL.InputType("CategoriesCreateOrConnectWithoutWorkspacesInput", {
  isAbstract: true
})
export class CategoriesCreateOrConnectWithoutWorkspacesInput {
  @TypeGraphQL.Field(_type => CategoriesWhereUniqueInput, {
    nullable: false
  })
  where!: CategoriesWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoriesCreateWithoutWorkspacesInput, {
    nullable: false
  })
  create!: CategoriesCreateWithoutWorkspacesInput;
}
