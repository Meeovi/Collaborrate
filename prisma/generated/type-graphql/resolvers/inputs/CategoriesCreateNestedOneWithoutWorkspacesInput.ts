import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriesCreateOrConnectWithoutWorkspacesInput } from "../inputs/CategoriesCreateOrConnectWithoutWorkspacesInput";
import { CategoriesCreateWithoutWorkspacesInput } from "../inputs/CategoriesCreateWithoutWorkspacesInput";
import { CategoriesWhereUniqueInput } from "../inputs/CategoriesWhereUniqueInput";

@TypeGraphQL.InputType("CategoriesCreateNestedOneWithoutWorkspacesInput", {
  isAbstract: true
})
export class CategoriesCreateNestedOneWithoutWorkspacesInput {
  @TypeGraphQL.Field(_type => CategoriesCreateWithoutWorkspacesInput, {
    nullable: true
  })
  create?: CategoriesCreateWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => CategoriesCreateOrConnectWithoutWorkspacesInput, {
    nullable: true
  })
  connectOrCreate?: CategoriesCreateOrConnectWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => CategoriesWhereUniqueInput, {
    nullable: true
  })
  connect?: CategoriesWhereUniqueInput | undefined;
}
