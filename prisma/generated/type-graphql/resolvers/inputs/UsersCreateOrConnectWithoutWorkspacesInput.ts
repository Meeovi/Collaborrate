import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateWithoutWorkspacesInput } from "../inputs/UsersCreateWithoutWorkspacesInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";

@TypeGraphQL.InputType("UsersCreateOrConnectWithoutWorkspacesInput", {
  isAbstract: true
})
export class UsersCreateOrConnectWithoutWorkspacesInput {
  @TypeGraphQL.Field(_type => UsersWhereUniqueInput, {
    nullable: false
  })
  where!: UsersWhereUniqueInput;

  @TypeGraphQL.Field(_type => UsersCreateWithoutWorkspacesInput, {
    nullable: false
  })
  create!: UsersCreateWithoutWorkspacesInput;
}
