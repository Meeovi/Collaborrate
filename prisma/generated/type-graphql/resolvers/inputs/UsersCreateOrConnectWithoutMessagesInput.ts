import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateWithoutMessagesInput } from "../inputs/UsersCreateWithoutMessagesInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";

@TypeGraphQL.InputType("UsersCreateOrConnectWithoutMessagesInput", {
  isAbstract: true
})
export class UsersCreateOrConnectWithoutMessagesInput {
  @TypeGraphQL.Field(_type => UsersWhereUniqueInput, {
    nullable: false
  })
  where!: UsersWhereUniqueInput;

  @TypeGraphQL.Field(_type => UsersCreateWithoutMessagesInput, {
    nullable: false
  })
  create!: UsersCreateWithoutMessagesInput;
}
