import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateWithoutEmailsInput } from "../inputs/UsersCreateWithoutEmailsInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";

@TypeGraphQL.InputType("UsersCreateOrConnectWithoutEmailsInput", {
  isAbstract: true
})
export class UsersCreateOrConnectWithoutEmailsInput {
  @TypeGraphQL.Field(_type => UsersWhereUniqueInput, {
    nullable: false
  })
  where!: UsersWhereUniqueInput;

  @TypeGraphQL.Field(_type => UsersCreateWithoutEmailsInput, {
    nullable: false
  })
  create!: UsersCreateWithoutEmailsInput;
}
