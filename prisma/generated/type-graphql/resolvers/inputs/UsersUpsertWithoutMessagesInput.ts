import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateWithoutMessagesInput } from "../inputs/UsersCreateWithoutMessagesInput";
import { UsersUpdateWithoutMessagesInput } from "../inputs/UsersUpdateWithoutMessagesInput";

@TypeGraphQL.InputType("UsersUpsertWithoutMessagesInput", {
  isAbstract: true
})
export class UsersUpsertWithoutMessagesInput {
  @TypeGraphQL.Field(_type => UsersUpdateWithoutMessagesInput, {
    nullable: false
  })
  update!: UsersUpdateWithoutMessagesInput;

  @TypeGraphQL.Field(_type => UsersCreateWithoutMessagesInput, {
    nullable: false
  })
  create!: UsersCreateWithoutMessagesInput;
}
