import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateWithoutMediamanagerInput } from "../inputs/UsersCreateWithoutMediamanagerInput";
import { UsersUpdateWithoutMediamanagerInput } from "../inputs/UsersUpdateWithoutMediamanagerInput";

@TypeGraphQL.InputType("UsersUpsertWithoutMediamanagerInput", {
  isAbstract: true
})
export class UsersUpsertWithoutMediamanagerInput {
  @TypeGraphQL.Field(_type => UsersUpdateWithoutMediamanagerInput, {
    nullable: false
  })
  update!: UsersUpdateWithoutMediamanagerInput;

  @TypeGraphQL.Field(_type => UsersCreateWithoutMediamanagerInput, {
    nullable: false
  })
  create!: UsersCreateWithoutMediamanagerInput;
}
