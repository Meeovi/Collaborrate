import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateOrConnectWithoutMediamanagerInput } from "../inputs/UsersCreateOrConnectWithoutMediamanagerInput";
import { UsersCreateWithoutMediamanagerInput } from "../inputs/UsersCreateWithoutMediamanagerInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";

@TypeGraphQL.InputType("UsersCreateNestedOneWithoutMediamanagerInput", {
  isAbstract: true
})
export class UsersCreateNestedOneWithoutMediamanagerInput {
  @TypeGraphQL.Field(_type => UsersCreateWithoutMediamanagerInput, {
    nullable: true
  })
  create?: UsersCreateWithoutMediamanagerInput | undefined;

  @TypeGraphQL.Field(_type => UsersCreateOrConnectWithoutMediamanagerInput, {
    nullable: true
  })
  connectOrCreate?: UsersCreateOrConnectWithoutMediamanagerInput | undefined;

  @TypeGraphQL.Field(_type => UsersWhereUniqueInput, {
    nullable: true
  })
  connect?: UsersWhereUniqueInput | undefined;
}
