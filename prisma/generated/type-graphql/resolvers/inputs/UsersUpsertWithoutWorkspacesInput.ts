import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateWithoutWorkspacesInput } from "../inputs/UsersCreateWithoutWorkspacesInput";
import { UsersUpdateWithoutWorkspacesInput } from "../inputs/UsersUpdateWithoutWorkspacesInput";

@TypeGraphQL.InputType("UsersUpsertWithoutWorkspacesInput", {
  isAbstract: true
})
export class UsersUpsertWithoutWorkspacesInput {
  @TypeGraphQL.Field(_type => UsersUpdateWithoutWorkspacesInput, {
    nullable: false
  })
  update!: UsersUpdateWithoutWorkspacesInput;

  @TypeGraphQL.Field(_type => UsersCreateWithoutWorkspacesInput, {
    nullable: false
  })
  create!: UsersCreateWithoutWorkspacesInput;
}
