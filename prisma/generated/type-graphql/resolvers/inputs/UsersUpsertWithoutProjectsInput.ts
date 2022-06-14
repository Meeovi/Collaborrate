import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateWithoutProjectsInput } from "../inputs/UsersCreateWithoutProjectsInput";
import { UsersUpdateWithoutProjectsInput } from "../inputs/UsersUpdateWithoutProjectsInput";

@TypeGraphQL.InputType("UsersUpsertWithoutProjectsInput", {
  isAbstract: true
})
export class UsersUpsertWithoutProjectsInput {
  @TypeGraphQL.Field(_type => UsersUpdateWithoutProjectsInput, {
    nullable: false
  })
  update!: UsersUpdateWithoutProjectsInput;

  @TypeGraphQL.Field(_type => UsersCreateWithoutProjectsInput, {
    nullable: false
  })
  create!: UsersCreateWithoutProjectsInput;
}
