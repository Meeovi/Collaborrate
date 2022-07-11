import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateWithoutProjectsInput } from "../inputs/UsersCreateWithoutProjectsInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";

@TypeGraphQL.InputType("UsersCreateOrConnectWithoutProjectsInput", {
  isAbstract: true
})
export class UsersCreateOrConnectWithoutProjectsInput {
  @TypeGraphQL.Field(_type => UsersWhereUniqueInput, {
    nullable: false
  })
  where!: UsersWhereUniqueInput;

  @TypeGraphQL.Field(_type => UsersCreateWithoutProjectsInput, {
    nullable: false
  })
  create!: UsersCreateWithoutProjectsInput;
}
