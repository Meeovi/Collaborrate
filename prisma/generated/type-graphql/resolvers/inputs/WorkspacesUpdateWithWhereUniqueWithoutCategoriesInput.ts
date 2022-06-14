import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesUpdateWithoutCategoriesInput } from "../inputs/WorkspacesUpdateWithoutCategoriesInput";
import { WorkspacesWhereUniqueInput } from "../inputs/WorkspacesWhereUniqueInput";

@TypeGraphQL.InputType("WorkspacesUpdateWithWhereUniqueWithoutCategoriesInput", {
  isAbstract: true
})
export class WorkspacesUpdateWithWhereUniqueWithoutCategoriesInput {
  @TypeGraphQL.Field(_type => WorkspacesWhereUniqueInput, {
    nullable: false
  })
  where!: WorkspacesWhereUniqueInput;

  @TypeGraphQL.Field(_type => WorkspacesUpdateWithoutCategoriesInput, {
    nullable: false
  })
  data!: WorkspacesUpdateWithoutCategoriesInput;
}
