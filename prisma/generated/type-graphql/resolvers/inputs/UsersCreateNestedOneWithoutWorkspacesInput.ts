import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateOrConnectWithoutWorkspacesInput } from "../inputs/UsersCreateOrConnectWithoutWorkspacesInput";
import { UsersCreateWithoutWorkspacesInput } from "../inputs/UsersCreateWithoutWorkspacesInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";

@TypeGraphQL.InputType("UsersCreateNestedOneWithoutWorkspacesInput", {
  isAbstract: true
})
export class UsersCreateNestedOneWithoutWorkspacesInput {
  @TypeGraphQL.Field(_type => UsersCreateWithoutWorkspacesInput, {
    nullable: true
  })
  create?: UsersCreateWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => UsersCreateOrConnectWithoutWorkspacesInput, {
    nullable: true
  })
  connectOrCreate?: UsersCreateOrConnectWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => UsersWhereUniqueInput, {
    nullable: true
  })
  connect?: UsersWhereUniqueInput | undefined;
}
