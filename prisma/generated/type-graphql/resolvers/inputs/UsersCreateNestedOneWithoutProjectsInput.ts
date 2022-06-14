import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateOrConnectWithoutProjectsInput } from "../inputs/UsersCreateOrConnectWithoutProjectsInput";
import { UsersCreateWithoutProjectsInput } from "../inputs/UsersCreateWithoutProjectsInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";

@TypeGraphQL.InputType("UsersCreateNestedOneWithoutProjectsInput", {
  isAbstract: true
})
export class UsersCreateNestedOneWithoutProjectsInput {
  @TypeGraphQL.Field(_type => UsersCreateWithoutProjectsInput, {
    nullable: true
  })
  create?: UsersCreateWithoutProjectsInput | undefined;

  @TypeGraphQL.Field(_type => UsersCreateOrConnectWithoutProjectsInput, {
    nullable: true
  })
  connectOrCreate?: UsersCreateOrConnectWithoutProjectsInput | undefined;

  @TypeGraphQL.Field(_type => UsersWhereUniqueInput, {
    nullable: true
  })
  connect?: UsersWhereUniqueInput | undefined;
}
