import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateWithoutEmailsInput } from "../inputs/UsersCreateWithoutEmailsInput";
import { UsersUpdateWithoutEmailsInput } from "../inputs/UsersUpdateWithoutEmailsInput";

@TypeGraphQL.InputType("UsersUpsertWithoutEmailsInput", {
  isAbstract: true
})
export class UsersUpsertWithoutEmailsInput {
  @TypeGraphQL.Field(_type => UsersUpdateWithoutEmailsInput, {
    nullable: false
  })
  update!: UsersUpdateWithoutEmailsInput;

  @TypeGraphQL.Field(_type => UsersCreateWithoutEmailsInput, {
    nullable: false
  })
  create!: UsersCreateWithoutEmailsInput;
}
